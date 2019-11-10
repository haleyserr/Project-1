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





const uidT = "6fdRBjubuiMx5VtwlJJGFdwTsZB3";

//The UIDs for both students and teachers
const permit = [
    {
        classroom: [
            {
                name: "Joe Shmoe",
                student: "fmXkrIa6xeTuUEpEuVGXTRuEYNL2"
            },
            {
                name: "Shanaenae",
                student: "7tiXwZTvomVBmdXwksC82cr1dRk2"
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
    console.log("TEACHER WINDOW ACTIVE");
    


    $("#Email").attr("placeholder", "Enter Teacher Email");
    $("#pass").attr("placeholder", "Enter Teacher Password");
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
    if(uidT === permit[1].faculty[0].teacher ){
        console.log(permit[1].faculty[0].teacher);
        console.log("WELCOME TEACHER");
        //dashboard();
    }
    else{
        //choiceScreen();
    }











}

//Auto signs out on refresh
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}

 signOut();


















start();




