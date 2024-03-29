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
const email = $("#email").val()
const pass = $("#pass").val();
const login = $("#login").val();
const auth = firebase.auth();





// const uidT = "6fdRBjubuiMx5VtwlJJGFdwTsZB3";


//This houses the uid that is going to be logged in.
let uid = "";

//The UIDs for both students and teachers
const permit = [
    {
        classroom: [
            {
                name: "Zim",
                student: "XW3lYLKJBWbb6YvXqvFkR22M1BP2"
            },
            {
                name: "Shan",
                student: "OBFeNd3ZEGYHerkFipoOMmjkYJ73"
            },
            {
                name: "HAVAAA-NAGILA",
                student: "dgE56r8VvRMjycFZImBU8fbV1Hv1"
            } 
        ]
    },
    {
        faculty: [
            {
                name: "Miss Miss",
                teacher: "6fdRBjubuiMx5VtwlJJGFdwTsZB3" 
            }
        ]

    }
    

];



//THE STARTING POINT
function start(){

    $(".authen").show();
    tokenLogin();



}





function tokenLogin(){
    console.log("AWAITING LOGIN TOKEN");
    


    
    
    //WHENEVER THE LOGIN BUTTON IS CLICKED, IT GRABS THE NECESSARY VALUES
    $("#login").on("click", function(){
        console.log("LOGIN TOKEN PASSED");

        //TODO: INPUT CHECK FOR EMAIL
        const email = $("#email").val();
        const pass = $("#pass").val();
        const auth = firebase.auth();
        
        //IF THE PASSWORD IS INCORRECT, THIS FUNCTION WILL SPIT OUT AN ERROR IN THE FORM OF A TOAST
        const gauntlet = auth.signInWithEmailAndPassword(email, pass).catch(function(error){
            console.log(error);
            if (error){
                console.log("INCORRECT PASSWORD");
                
                $(".toast").toast('show');
                

            }
            
        });



        //IF THE PAGE DETECTS AN AUTHORIZATION STATE CHANGE, THE USER LOGGING IN WILL BE GRABBED AND DEFINED TO UID
        //IF THE PASSWORD OR EMAIL IS INCORRECT, IT WON'T DO ANYTHING DUE TO THE TOAST NOTIF HANDLING THAT^^^^
        //IF THE LOGIN IS CORRECT, THE AUTHENTICATE() FUNCTION WILL FIRE
        firebase.auth().onAuthStateChanged(function(user) {

            console.log(user);
            
            if (user) {
                console.log(user.uid);
                uid = user.uid;

                console.log("USER FOUND");
                authenticate();
            } 
            else if(!user){
                console.log("USER NOT FOUND");
            }

          });
        

    });


}


function authenticate(){
    console.log(`AUTHENTICATION PROCESS ACTIVATED. UID IS ${uid}`);
    $(".authen").hide();
    
    //IF THE UID MATCHES THE TEACHER, IT GOES TO DASHBOARD. IF IT DOESN'T MATCH A TEACHER UID, THEN OFF TO THE CHOICE SCREEN WITH YOU
    if(uid === permit[1].faculty[0].teacher ){
        console.log(permit[1].faculty[0].teacher);
        console.log(`Welcome ${permit[1].faculty[0].name}`);


        //calls the dashboard.html
        dashboard(permit[1].faculty[0].name, uid);
    }
    else{
        
        //if the UID matches anything in the student object, we call choiceScreen with their name and UID
        for(let i = 0; i < permit[0].classroom.length; i++){
            if (uid === permit[0].classroom[i].student){
                console.log(uid);
                choiceScreen(permit[0].classroom[i].name, uid);

            }
        }
    }





}






//AUTO SIGNS OUT ON REFRESH
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}





 
//CALLS THE DASHBOARD
function dashboard(name,id){
    //syntax for the dashboard.html call
    window.location = "./dashboard/index.html";
}
//CALLS THE CHOICE SCREEN
function choiceScreen(name, id){
    console.log("CHOICE SCREEN ACTIVE");

    $(".choices").show();


    $(".card").on("click", function(){
        console.log("BUTTON CLICK REGISTERED");
        console.log($(this).attr("value"));


        if ($(this).attr("value") === "math" ) {
            window.location = "./gameDaniel/index.html";
        }
        else if ($(this).attr("value") === "science" ) {
            window.location = "./gameHaley/index.html";
        }
        else if ($(this).attr("value") === "history" ) {
            window.location = "./gameNathan/index.html";
        }



        
    });


    //THIS PROVIDES THE BANNER FOR WHENEVER A STUDENT IS DONE WITH A GAME/QUIZ
    //IF THE STUDENT CLICKS ON THE PRECOMPLETED QUIZ/GAME, PROGRESS RESETS IN FIREBASE
    //THIS CODE IS TO LET STOOOPID KID KNOW HE/SHE/THEY WHOMEVER DID IT ALREADY.
    const entry = database.ref(`math/${uid}`);

    entry.on("value", function(snapshot) {

        if ( snapshot.exists()){
            console.log("MATH IS ALREADY DONE");
            $(".note1").show();


        }


    });





}



















///////////////////////////////////////

//INITIAL CALL TO START EVERYTHING
// signOut();
start();
// signOut();



///////////////////////////////////////





$("#sout").on("click", function(){
    signOut();
    window.location = "index.html";




});


