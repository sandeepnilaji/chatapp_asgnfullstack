const socket = io("https://chatappassgn.herokuapp.com/");

const msg = document.getElementById("msg");
const container = document.querySelector(".container");
const dis_msg = (msg, loc) => {
  let div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add("msg");
  div.classList.add(loc);
  container.append(div);
};
const from_mine = () => {
  const val = msg.value;
  dis_msg(`${val}`, "right");
  socket.emit("send", val);
  msg.value = "";
};

const userName = prompt("Enter Your Name");
let flag = false;
async function find_user() {
  const user = await fetch("https://chatappassgn.herokuapp.com/userlist");
  const data = await user.json();
  console.log(data);
  data.map((el) => {
    // console.log(el.username);
    if (el.username === userName) {
      flag = true;
    }
  });
  // console.log(flag);
  if (flag === true) {
    // find_user();
    socket.emit("new-user-joined", userName);
    socket.on("user-joined", (data) => {
      dis_msg(`${data} joined the chat`, "left");
    });
    socket.on("receive", (data) => {
      dis_msg(`${data.name}:${data.message}`, "left");
    });
    socket.on("left", (data) => {
      dis_msg(`${data.name} left the chat`, "left");
    });
  } else {
    alert("Please Signup");
    window.location.href = "signup.html";
  }
}

if (userName !== "") {
  find_user();
}
