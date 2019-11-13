$(document).ready(function () {

    

    let totalCorrect = 0;
    let totalIncorrect = 0;



    //When initially starting test, display 1st question, hide all other elements

    function startTest() {


        document.getElementById("question1").style.display = "block";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";


    }

    startTest();


    //Function to evaluate points and display appropriate question 
    //Some questions are multiple points

    function displayNextQuestion() {

        if (totalCorrect + totalIncorrect === 1) {
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 4) {
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 5) {
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 9) {
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 12) {
            document.getElementById("question5").style.display = "none";
            document.getElementById("question6").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 16) {
            document.getElementById("question6").style.display = "none";
            document.getElementById("question7").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 17) {
            document.getElementById("question7").style.display = "none";
            document.getElementById("question8").style.display = "block"
        } else if (totalCorrect + totalIncorrect === 18) {
            document.getElementById("question8").style.display = "none";
            document.getElementById("question9").style.display = "block"
        } else if (totalCorrect + totalIncorrect === 19) {
            document.getElementById("question9").style.display = "none";
            document.getElementById("question10").style.display = "block"
        } else if (totalCorrect + totalIncorrect === 20) {
            document.getElementById("question10").style.display = "none";
            document.getElementById("finishScreen").style.display = "block"
        }

    }



    // Most Questions, Adjust points when class is correct/incorrect

    
    $(".correct").click(function () {
        totalCorrect++;
        console.log(totalCorrect);
    });

    $(".incorrect").click(function () {

        totalIncorrect++;
        console.log("Correct" + totalIncorrect);
    });



    //Drag and Drop Q4, Q6

    //Points for Q4 (match class of moveable elements to container)

    //Points for Q4 (match class of moveable elements to container)

    // Update Firebase with score when quiz complete





});