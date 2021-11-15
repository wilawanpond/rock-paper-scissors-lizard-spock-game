//caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

//addEventListener on each button
//generate computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

//create function that convert keyword to a readable word
function convertToWord (keyWord) {
    if (keyWord === "rock") return "Rock";
    if (keyWord === "paper") return "Paper";
    if (keyWord === "scissors") return "Scissors";
    if (keyWord === "lizard") return "Lizard";
    return "Spock";
}

//create win function
function win(userChoice, computerChoice) {
    //when user wins
    userScore++;
    //show score on the score board
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice)+(smallUserWord) + " beats " + convertToWord(computerChoice)+(smallCompWord) + ". You win!🎉";
    //add animation to the choice
    userChoice_div.classList.add('green-border');
    //set time-out animation
    setTimeout(function(){
        userChoice_div.classList.remove('green-border')
    }, 350);
}

//create lose function
function lose(userChoice, computerChoice) {
    //when computer wins
    computerScore++;
    //show score on the score board
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice)+(smallUserWord) + " loses to " + convertToWord(computerChoice)+(smallCompWord) + ". You lost😭";
    userChoice_div.classList.add('red-border');
    //set time-out animation
    setTimeout(function(){
        userChoice_div.classList.remove('red-border')
    }, 350);
}

//create draw function
function draw(userChoice, computerChoice) {
    //show score on the score board
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice)+(smallUserWord) + " equals " + convertToWord(computerChoice)+(smallCompWord) + ". It's a draw🤔";
    userChoice_div.classList.add('gray-border');
    //set time-out animation
    setTimeout(function(){
        userChoice_div.classList.remove('gray-border')
    }, 350);
}

//compare between computer choice and user choice using switch statement
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //case when user wins!
        case "rockscissors":
        case "rocklizard":
        case "scissorspaper":
        case "scissorslizard":
        case "spockscissors":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
        case "paperspock":
        case "paperrock":
            //win function
            win(userChoice, computerChoice); 
            break;
        case "rockspock":
        case "rockpaper":
        case "scissorsspock":
        case "scissorsrock":
        case "spockpaper":
        case "spocklizard":
        case "lizardscissors":
        case "lizardrock":
        case "paperlizard":
        case "paperscissors":
            //lose function
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
        case "paperpaper":
            //draw function
            draw(userChoice, computerChoice);
            break;
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
    game("scissors");
})

lizard_div.addEventListener('click', function(){
    game("lizard");
})

spock_div.addEventListener('click', function(){
    game("spock");
})