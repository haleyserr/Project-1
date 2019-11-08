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



function start(){

    $(".btn").on("click", function(){
        

        let buttonVal = $(this).attr("value");





        if (buttonVal === "student"){
            console.log("STUDENT");

            //calls the student page
            student();
        }
        else{
            console.log("TEACHER");
            
            //calls the teacher page
            teacher();
        }



    }); 




}



function student(){
    console.log("Student Window Active");
    $("#start").hide()

    
    $("#user").attr("placeholder", "Enter Student Username");
    $("#pass").attr("placeholder", "Enter Student Password");
    $(".authen").show();


}


function teacher(){
    console.log("Teacher Window Active");
    $("#start").hide()


    $("#user").attr("placeholder", "Enter Teacher Username");
    $("#pass").attr("placeholder", "Enter Teacher Password");
    $(".authen").show();
    



}




















start();