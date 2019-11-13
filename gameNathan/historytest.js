let score=0;
let chances = 3;
let keysUsed =[];
const questions = ["1492", "1776", "1812", "1865", "1876", "1890", "1915", "1920", "1945", "1968"]
const tips = ["Year Columbus sailed across the ocean.", "Year USA gained it's independence.", "War between USA and Great Britain in the 1800s.", "Year Abraham Lincoln was assasinated."
                , "Battle of Little BigHorn", "Plessy v Ferguson", "Sinking of Luisitania / Entrance of US into WWI", "First stock market crash.", 
                "Bombing of Hiroshima and Nagasaki.", "Assasination of Martin Luther King Jr."]

//This updates the score and chances on screen
function scoreBoard(){
    $("#score").html("Score" + score);
    $("#chances").html("Chances left: "+chances);
    $("#keys-used").html("Keys Pressed"+ keysUsed);
}

//MAIN PROGRAM
//----------------------------------------------------

//Call functions to start game
scoreBoard();

//Pull user input key and run function
$(".card").on("keyup", function(){
    const userInput = event.key;

    if(chances == 0){
        alert("You have run out of chances.");
        alert("Your score was: " + score);
        chances=3;
        score=0;
        keysUsed=[];
        randomNum();
        scoreBoard();
        return;
    }

    if (userInput == randomQNum){
        alert("Congrats that's the correct number");
        score++;
        randomNum();
        chances = 3;
        keysUsed=[];
        scoreBoard();
        return;
    } else if (userInput < randomQNum) {
        alert("Your guess is less than the number.");
        chances--;
        keysUsed.push(userInput);
        scoreBoard();
    } else if (userInput > randomQNum) {
        alert("Your guess is higher than the number.");
        chances--;
        keysUsed.push(userInput);
        scoreBoard();
    }
};

quiz();

