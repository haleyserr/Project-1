const firebaseConfig = {
    apiKey: "AIzaSyBiKzQFqt-WPMEGbNOMbL4RhTIeXXWqV_M",
    authDomain: "operation-t-a-s-k-d028a.firebaseapp.com",
    databaseURL: "https://operation-t-a-s-k-d028a.firebaseio.com",
    projectId: "operation-t-a-s-k-d028a",
    storageBucket: "operation-t-a-s-k-d028a.appspot.com",
    messagingSenderId: "520491246095",
    appId: "1:520491246095:web:b686d6f2add5af5a88b97a",
    measurementId: "G-KS570N29FC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();



//These constants get the values from the corresponding divs. 
// his will be inputted in the student() and teacher() functions directly below.
const email = $("#email").val()
const pass = $("#pass").val();
const login = $("#login").val();
const auth = firebase.auth();














function start(){

    $(".btn").on("click", function(){
        

        let buttonVal = $(this).attr("value");





        if (buttonVal === "student"){
            console.log("STUDENT");

            //calls the student page
            student();
        }
        else if (buttonVal === "teacher"){
            console.log("TEACHER");
            
            //calls the teacher page
            teacher();
        }



    }); 




}



function student(){
    console.log("STUDENT WINDOW ACTIVE");
    $("#start").hide()


    $("#email").attr("placeholder", "Enter Student Email");
    $("#pass").attr("placeholder", "Enter Student Password");
    $(".authen").show();
    
    $("#login").on("click", function(){
        console.log("LOGIN TOKEN PASSED");
        
        //TODO: INPUT CHECK FOR EMAIL
        const email = $("#email").val();
        const pass = $("#pass").val();
        const auth = firebase.auth();

        const gauntlet = auth.signInWithEmailAndPassword(email, pass);

        gauntlet.catch(function(){
            console.log("ERROR");
        });
        

    });


}


function teacher(){
    console.log("TEACHER WINDOW ACTIVE");
    $("#start").hide()


    $("#Email").attr("placeholder", "Enter Teacher Email");
    $("#pass").attr("placeholder", "Enter Teacher Password");
    $(".authen").show();
    
    $("#login").on("click", function(){
        console.log("LOGIN TOKEN PASSED");

        //TODO: INPUT CHECK FOR EMAIL
        const email = $("#email").val();
        const pass = $("#pass").val();
        const auth = firebase.auth();
        

        const gauntlet = auth.signInWithEmailAndPassword(email, pass);


        //TODO: ADD A TOAST NOTIFICATION HERE
        gauntlet.catch(function(){
            if (this){
                console.log("INCORRECT PASSWORD");

            }
            
        });



        //TODO: GET THIS THING TO WORK
        
        // const user = firebase.auth().currentUser;
        // firebase.auth().onAuthStateChanged(function(user) {
            
        //     if (user) {
        //         console.log("USER FOUND");
        //     } 
        //     else if(!user){
        //         console.log("USER NOT FOUND");
        //     }

        //   });
        

    });


}


function authenticate(){
    console.log("AUTHENTICATION PROCESS ACTIVATED");




}



















start();




