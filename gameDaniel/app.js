

const playerInfo = 
    {
        uid: "",
        score: 0,
        grade: 0,
        status: "in progress"

    };




console.log(playerInfo.uid);
















$(".card").hide();




//CLICKING YES WOULD START THE GAME BY RUNNING READYSETGO()
//CLICKING NO WOULD GO BACK TO LOGIN SCREEN
$(".btn").on("click", function(){
    console.log("BUTTON CLICK REGISTERED");


    if( $(this).attr("value") === "yes" ){

        console.log("REGISTERED");
        readysetgo();

    }

    else if ( $(this).attr("value") === "quit" ){
        console.log("REGISTERED");
        window.location = "../index.html";
    }   



});









//STARTS THE GAME
function readysetgo(){
    let zeta = 1;
    console.log("READYSETGO FUNCTION FIRED");
    $("#ready").hide();
    $(".card").show();

    $(".card-text").(`${randomNum()} ${operator()} ${randomNum()}`);
    









};


function randomNum(){
    console.log("RANDOMNUM FUNCTION FIRED");

    //TODO:
    //zeta is going to be 1; aka Level 1
    //multiply zeta with the 10 value
    //Math.random() * (zeta * 10)
    let x = Math.floor((Math.random() * 10) + 1);
    







     return x
}

function operator(){
    let operator = ["+", "-"];
}
