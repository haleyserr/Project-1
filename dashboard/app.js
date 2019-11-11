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





const uidT = "6fdRBjubuiMx5VtwlJJGFdwTsZB3";
let uid = "";

//The UIDs for both students and teachers
const permit = [
    {
        classroom: [
            {
                name: "ZIM ZIM SALA BIM",
                student: "XW3lYLKJBWbb6YvXqvFkR22M1BP2"
            },
            {
                name: "Shanaenae",
                student: "OBFeNd3ZEGYHerkFipoOMmjkYJ73"
            } 
        ]
    },
    {
        faculty: [
            {
                name: "Mizz Cheeks",
                teacher: "6fdRBjubuiMx5VtwlJJGFdwTsZB3" 
            }
        ]

    }
    

];




function start(){

    $(".authen").show();
    tokenLogin();



}





function tokenLogin(){
    console.log("AWAITING LOGIN TEKON");
    


    $("#email").attr("placeholder", "Enter Email");
    $("#pass").attr("placeholder", "Enter Password");
    $(".authen").show();
    
    $("#login").on("click", function(){
        console.log("LOGIN TOKEN PASSED");

        //TODO: INPUT CHECK FOR EMAIL
        const email = $("#email").val();
        const pass = $("#pass").val();
        const auth = firebase.auth();
        

        const gauntlet = auth.signInWithEmailAndPassword(email, pass).catch(function(error){
            console.log(error);
            if (error){
                console.log("INCORRECT PASSWORD");
                
                $(".toast").toast('show');
                setTimeout(function() {
                    $(".toast").hide();
                }, 1500);

            }
            
        });



        
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
    console.log("AUTHENTICATION PROCESS ACTIVATED");
    $(".authen").hide();
    
    //IF THE UID MATCHES THE TEACHER, IT GOES TO DASHBOARD. IF IT DOESN'T MATCH A TEACHER UID, THEN OFF TO THE CHOICE SCREEN WITH YOU
    if(uid === permit[1].faculty[0].teacher ){
        console.log(permit[1].faculty[0].teacher);
        console.log(`Welcome ${permit[1].faculty[0].name}`);


        //calls the dashboard.html
        dashboard(permit[1].faculty[0].name, uidT);
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





 

function dashboard(name,id){
    //syntax for the dashboard.html call
    window.location = "./dashboard/index.html";
}
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





}






















signOut();
start();




