let counter = 0;
let score = 0;
const questions = ["1492", "1776", "1812", "1865", "1876", "1890", "1915", "1920", "1945", "1968"]
const tips = ["Year Columbus sailed across the ocean.", "Year USA gained it's independence.", "War between USA and Great Britain in the 1800s.", "Year Abraham Lincoln was assasinated.", "Battle of Little BigHorn", "Plessy v Ferguson", "Sinking of Luisitania / Entrance of US into WWI", "First stock market crash.",
    "Bombing of Hiroshima and Nagasaki.", "Assasination of Martin Luther King Jr."
];

//Create for loop to cycle through the arrays
function questionSetup(counter) {
    $("#questionHint").text(tips[counter]);
    $("#questionNumber").text(`Question: ${counter +=1}`);
    if (counter === questions.length + 1) {
        const scoreTotal = $("<h1>");
        scoreTotal.addClass("display-4");
        scoreTotal.text("Score: " + score + "/10");
        $("#containerScore").prepend(scoreTotal);
    };
};

//Pull information from form field when submit button is pressed
$("#submit").on("click", function () {
    userInput = $("#guess").val().trim();

    //Identify user input and give resulting score or info about wrong answer
    if (userInput === questions[counter]) {
        score++;
        counter++;
        questionSetup(counter);
        $("#correctAnswer").toast('show');
        return;
    } else if (userInput < questions[counter]) {
        counter++;
        questionSetup(counter);
        $("#tooEarlyAnswer").toast('show');
    } else if (userInput > questions[counter]) {
        counter++;
        questionSetup(counter);
        $("#tooLateAnswer").toast('show');
    };
});

//Call functions to start game
questionSetup(counter);