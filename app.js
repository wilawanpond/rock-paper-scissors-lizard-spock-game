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
//generate computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

//compare between computer choice and user choice using switch statement
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //case when user wins!
        case "rockscissor":
        case "rocklizard":
        case "scissorpaper":
        case "scissorlizard":
        case "spockscissor":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
        case "paperspock":
        case "paperrock":
            console.log("USER WINS!");
            break;
        case "rockspock":
        case "rockpaper":
        case "scissorspock":
        case "scissorrock":
        case "spockpaper":
        case "spocklizard":
        case "lizardscissor":
        case "lizardrock":
        case "paperlizard":
        case "paperscissor":
            console.log("USER LOSES!");
    }
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