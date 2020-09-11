var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//constant declarations 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result"); 
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p"); 
const scissors_div = document.getElementById("s"); 
const lizard_div = document.getElementById("l"); 
const spock_div = document.getElementById("z");

//convert the id into full word
function convertToWord(letter) {
    if(letter == "r" ) return "Rock";
    if(letter == "p" ) return "Paper";
    if(letter == "s" ) return "Scissors";
    if(letter == "l" ) return "Lizard";
    if(letter == "z" ) return "Spock";
}

//win action 
function action(userChoice,computerChoice){
    if(userChoice =="s" && computerChoice == "p") return "cuts";
    if(userChoice =="p" && computerChoice == "r") return "covers";
    if(userChoice =="r" && computerChoice == "l") return "smashes";
    if(userChoice =="l" && computerChoice == "z") return "poisons";
    if(userChoice =="s" && computerChoice == "l") return "decapitates";
    if(userChoice =="l" && computerChoice == "p") return "eats";
    if(userChoice =="p" && computerChoice == "z") return "disapproves";
    if(userChoice =="z" && computerChoice == "s") return "smashes";
    if(userChoice =="z" && computerChoice == "r") return "vaporizes";
    if(userChoice =="r" && computerChoice == "s") return "crushes";

}


//random computer move
function getComputerChoice() {
    const choices = ['r' , 'p' ,'s' ,'l' , 'z'];
    const randomNumber =(Math.floor(Math.random() *5));
    return choices [randomNumber];
}

//Win function
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)} ${action(userChoice,computerChoice)}   ${convertToWord(computerChoice)} . You win!!! `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}

//lose action
function loseAction(userChoice,computerChoice){
    if(computerChoice =="s" && userChoice == "p") return "is cut by";
    if(computerChoice =="p" && userChoice == "r") return "is covered by";
    if(computerChoice =="r" && userChoice == "l") return "is smashed by";
    if(computerChoice =="l" && userChoice == "z") return "is poisoned by";
    if(computerChoice =="s" && userChoice == "l") return "is decapitated by";
    if(computerChoice =="l" && userChoice == "p") return "is eaten by";
    if(computerChoice =="p" && userChoice == "z") return "is disapproved by";
    if(computerChoice =="z" && userChoice == "s") return "is smashed by";
    if(computerChoice =="z" && userChoice == "r") return "is vaporized by";
    if(computerChoice =="r" && userChoice == "s") return "is crushed by";

}

//lose function 
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)} ${loseAction(userChoice,computerChoice)}   ${convertToWord(computerChoice)} . You lose!!! `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

//draw function
function draw(userChoice,computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals  ${convertToWord(computerChoice)} . Its a draw !!!`;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('yellow-glow') }, 300);
    
}

//logics for win,draw or lsoe
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case"sp":
        case"pr":
        case"rl":
        case"lz":
        case"zs":
        case"sl":
        case"lp":
        case"pz":
        case"zr":
        case"rs":
        win(userChoice,computerChoice);
        break;
        case"ps":
        case"rp":
        case"lr":
        case"zl":
        case"sz":
        case"ls":
        case"pl":
        case"zp":
        case"rz":
        case"sr":
        lose(userChoice,computerChoice);
        break;
        case"rr":
        case"ss":
        case"pp":
        case"ll":
        case"zz":
        draw(userChoice,computerChoice);
       break;


    } 
}


//main 
function main() {
rock_div.addEventListener('click', function(){
    game("r");
    })
paper_div.addEventListener("click" , function() {
    game("p");
})
scissors_div.addEventListener("click" , function() {
    game("s");
})
lizard_div.addEventListener("click" , function() {
   game("l");
})
spock_div.addEventListener("click" , function() {
   game("z");}
   )
}

main() ;






