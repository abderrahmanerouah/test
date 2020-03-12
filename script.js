const popRules = document.querySelector(".rules"),
  rules = document.getElementById("rules"),
exit = document.getElementById("exit");

function popUp() {
  popRules.classList.toggle("rules-hide");
}
/////////////////////////////////////
const tools = document.getElementsByClassName("icon");
const section = document.getElementById("section");
const imgs = [
  "images/icon-paper.svg",
  "images/icon-scissors.svg",
  "images/icon-rock.svg"
];
const classes = ["paper", "scissors", "rock"];
const user = document.querySelector('.user');
const cpu = document.querySelector('.cpu');
///////////////////////
for (let i = 0; i < 3; i++) {
  tools[i].addEventListener("click", function() {
    //////user////
    section.style.display = "none";
    const child1 = document.createElement("img");
    child1.setAttribute('src', imgs[i]);
    user.appendChild(child1);
    user.classList.add('icon');
    user.classList.add(classes[i]);
    ////////CPU///////////:
    let cpuChoise = cpuChois();
    const child2 = document.createElement("img");
    child2.setAttribute("src", imgs[cpuChoise]);
    cpu.appendChild(child2);
    cpu.classList.add("icon");
    cpu.classList.add(classes[cpuChoise]);
  });
}
///////Random choise of CPU/////
function cpuChois() {
  return Math.floor(Math.random() * 3);
}
