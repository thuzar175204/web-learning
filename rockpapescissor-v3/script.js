const scores = {
  win: 0,
  lose: 0,
  tie: 0,
};

//Object Oriented Programming

//Method

//Nested Object

const game = {
  scores: {
    win: 0,
    lose: 0,
    tie: 0,
  },

  computerMove() {
    let computer;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      computer = "rock";
    } else if (random === 2) {
      computer = "paper";
    } else if (random === 3) {
      computer = "scissor";
    }
    return computer;
  },
  takeResult(user) {
    let computer = this.computerMove();
    let result;

    if (user === "rock" && computer === "rock") {
      result = "Tie!";
    } else if (user === "rock" && computer === "paper") {
      result = "You Lose";
    } else if (user === "rock" && computer === "scissor") {
      result = "You Win!";
    }

    if (user === "paper" && computer === "rock") {
      result = "You Win!";
    } else if (user === "paper" && computer === "paper") {
      result = "You Tie!";
    } else if (user === "paper" && computer === "scissor") {
      result = "You Lose!";
    }
    if (user === "scissor" && computer === "rock") {
      result = "You Lose!";
    } else if (user === "scissor" && computer === "paper") {
      result = "You Win!";
    } else if (user === "scissor" && computer === "scissor") {
      result = "You Tie!";
    }

    if (result === "You Win") {
      this.scores.win += 1;
    } else if (result === "You Lose") {
      this.scores.lose += 1;
    } else {
      this.scores.tie += 1;
    }

    document.getElementById("noti").innerHTML = `
       <p> You pick <img src="./img/${user}.png" alt="">
.Computer pick <img src="./img/${computer}.png" alt="">
.</p>
       <p> ${result}.</p>
       <p> Wins : ${this.scores.win}, Loses: ${this.scores.lose}, Ties  :${this.scores.tie}</P>`;
  },

  start() {
    document.getElementById("rock").addEventListener("click", function () {
      game.takeResult("rock");
    })

    document.getElementById("paper").addEventListener("click", function () {
      game.takeResult("paper");
    })

    document.getElementById("scissor").addEventListener("click", function () {
      game.takeResult("scissor");
    })
  }
}

game.start();
