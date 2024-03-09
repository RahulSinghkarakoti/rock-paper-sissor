let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
var msg = document.querySelector(".msg .box h2");
var score = document.querySelectorAll(".score h3");
var msg_box = document.querySelector(".box");
var reset = document.querySelector(".box-reset");

 
  reset.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    score[0].innerHTML = `${userscore}`;
    score[1].innerHTML = `${compscore}`;
    console.log("rest pressed");
  });
 

const comp = () => {
  const options = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const playgame = (userchoice) => {
  let compchoice = comp();
  console.log(compchoice);
  if (compchoice == "rock" && userchoice == "paper") {
    msg.innerHTML = "You win!";
    userscore++;
    score[0].innerHTML = `${userscore}`;
    msg_box.style.backgroundColor = "green";
  } else if (compchoice == "scissors" && userchoice == "paper") {
    msg.innerHTML = "You lose!";
    compscore++;
    score[1].innerHTML = `${compscore}`;
    msg_box.style.backgroundColor = "red";
  } else if (compchoice == "rock" && userchoice == "scissors") {
    msg.innerHTML = "You lose!";
    compscore++;
    score[1].innerHTML = `${compscore}`;
    msg_box.style.backgroundColor = "red";
  } else if (compchoice == "paper" && userchoice == "scissors") {
    msg.innerHTML = "You win!";
    userscore++;
    score[0].innerHTML = `${userscore}`;
    msg_box.style.backgroundColor = "green";
  } else if (compchoice == "paper" && userchoice == "rock") {
    msg.innerHTML = "You lose!";
    compscore++;
    score[1].innerHTML = `${compscore}`;
    msg_box.style.backgroundColor = "red";
  } else if (compchoice == "scissors" && userchoice == "rock") {
    msg.innerHTML = "You win!";
    userscore++;
    score[0].innerHTML = `${userscore}`;
    msg_box.style.backgroundColor = "green";
  } else {
    msg.innerHTML = "Draw";
    msg_box.style.backgroundColor = "#DBE2EF";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    console.log(choice);
  });
});
