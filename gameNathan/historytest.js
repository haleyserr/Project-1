let counter = 0;
let score = 0;
const questions = ["1492", "1776", "1812", "1865", "1876", "1890", "1915", "1920", "1945", "1968"]
const tips = ["Year Columbus sailed across the ocean.", "Year USA gained it's independence.", "War between USA and Great Britain in the 1800s.", "Year Abraham Lincoln was assasinated.", "Battle of Little BigHorn", "Plessy v Ferguson", "Sinking of Luisitania / Entrance of US into WWI", "First stock market crash.",
    "Bombing of Hiroshima and Nagasaki.", "Assasination of Martin Luther King Jr."
]

//This updates the score and chances on screen
function scoreBoard() {
    $("#score").html("Score" + score);
}

//MAIN PROGRAM
//----------------------------------------------------

//Create game

//Create for loop to cycle through the arrays
function questionSetup(counter) {
    $("#questionHint").text(tips[counter]);
    $("#questionNumber").text(`Question: ${counter +=1}`);
    if (counter > questions.length){
        window.location = "./endScreen.html";
    }
}

//Pull information from form field when submit button is pressed
$("#submit").on("click", function () {
    userInput = $("#guess").val().trim();

    //Identify user input and give resulting score or info about wrong answer
    if (userInput === questions[counter]) {
        score++;
        counter++;
        scoreBoard();
        questionSetup(counter);
        alert("That is the correct year good job!");
        return;
    } else if (userInput < questions[counter]) {
        counter++;
        scoreBoard();
        questionSetup(counter);
        alert("Your guess is before the correct year sorry kiddo :(");
    } else if (userInput > questions[counter]) {
        counter++;
        scoreBoard();
        questionSetup(counter);
        alert("You guessed after the correct year bukaroo :/");
    }
});

//Call functions to start game
scoreBoard();
questionSetup(counter);