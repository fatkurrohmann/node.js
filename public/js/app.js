// const kertas = document.querySelector(".kertas");
// const gunting = document.querySelector(".gunting");
// const batu = document.querySelector(".batu");

// addEventListener("click", function (e) {
//   if (e.target.classList.contains("kertas")) {
//     kertas.classList.add("kertas-active");
//     gunting.classList.remove("gunting-active");
//     batu.classList.remove("batu-active");
//   } else if (e.target.classList.contains("gunting")) {
//     kertas.classList.remove("kertas-active");
//     gunting.classList.add("gunting-active");
//     batu.classList.remove("batu-active");
//   } else if (e.target.classList.contains("batu")) {
//     kertas.classList.remove("kertas-active");
//     gunting.classList.remove("gunting-active");
//     batu.classList.add("batu-active");
//   }
// });

function getComputerChoice() {
  const comp = Math.random();
  if (comp < 0.34) return "kertas";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "batu";
}

function getResult(computer, player) {
  if (player == computer) return "Draw!";
  if (player == "kertas") return computer == "gunting" ? "You Lose!" : "You Win!";
  if (player == "gunting") return computer == "batu" ? "You Lose!" : "You Win!";
  if (player == "batu") return computer == "kertas" ? "You Lose!" : "You Win!";
}

const playerKertas = document.querySelector(".kertas");
playerKertas.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  const playerChoice = playerKertas.className;
  const result = getResult(computerChoice, playerChoice);
  console.log("comp :" + computerChoice);
  console.log("player :" + playerChoice);
  console.log("result :" + result);
});
