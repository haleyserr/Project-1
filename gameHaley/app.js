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
        document.getElementById("finishScreen").style.display = "none";


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
            submitResults();
            
        }
        else{
            console.log("Not time for next Question");
        }

    }



    // Most Questions, Adjust points when class is correct/incorrect

    
    $(".correct").click(function () {
        event.preventDefault();
        totalCorrect++;
        console.log(totalCorrect);
        displayNextQuestion();
    });

    $(".incorrect").click(function () {
        event.preventDefault();
        totalIncorrect++;
        console.log(totalIncorrect);
        displayNextQuestion();
    });



    //Drag and Drop Q4, Q6

    //Points for Q4 (match class of moveable elements to container)

    //Points for Q6 (match class of moveable elements to container)

    //Tabling Drag/Drop for future development

    //$(".moveable").draggable({
        //cursor: "move";
        //containment: "parent";
        //stop: evalAnswers();
    
    //})

    //$(".droppable").droppable({
        //drop: evalAnswers();
    //})

   // evalanswers() {
        //compare classes
        
    //}
    

    // Update Firebase with score when quiz complete

    //<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    //<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-analytics.js"></script>
    //<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-auth.js"></script>
    //<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>


   
    
    
    //const firebaseConfig = {
        //apiKey: "AIzaSyBiKzQFqt-WPMEGbNOMbL4RhTIeXXWqV_M",
        //authDomain: "operation-t-a-s-k-d028a.firebaseapp.com",
       // databaseURL: "https://operation-t-a-s-k-d028a.firebaseio.com",
        //projectId: "operation-t-a-s-k-d028a",
        //storageBucket: "operation-t-a-s-k-d028a.appspot.com",
        //messagingSenderId: "520491246095",
       // appId: "1:520491246095:web:b686d6f2add5af5a88b97a",
        //measurementId: "G-KS570N29FC"
   // };
    // Initialize Firebase
   // firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    
    //const database = firebase.database();

    //let Score = totalCorrect * 5;
    //let Name = 

    //submitResults(){


    //};


 function signOut() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    $("#sout").on("click", function(){
            signOut();
            window.location = "../index.html";
    });


});