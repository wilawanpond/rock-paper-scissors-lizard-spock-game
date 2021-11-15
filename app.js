//caching the DOM
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

//addEventListener on each button
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

console.log(getComputerChoice());

function game(userChoice) {
    
}

function main() {}
rock_div.addEventListener('click', function(){
    game("rock");
})

paper_div.addEventListener('click', function(){
    game("paper");
})

scissor_div.addEventListener('click', function(){
    game("scissor");
})

lizard_div.addEventListener('click', function(){
    game("lizard");
})

spock_div.addEventListener('click', function(){
    game("spock");
})