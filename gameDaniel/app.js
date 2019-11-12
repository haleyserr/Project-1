

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
        run();
        $("#ready").hide();
        $(".card").show();

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
    
    let sum = 0;
    let x = randomNum();
    let y = operator();
    console.log(y);
    let z = randomNum();

    $(".card-text").text(` ${x} ${y} ${z} `);

    
    
    if (y === "+"){
        sum = x + z;
    }
    else if (y === "-"){
        sum = x - z;
    }






    console.log(sum);
    return sum;
};


function randomNum(){
    console.log("RANDOMNUM FUNCTION FIRED");
    

    //TODO:
    //zeta is going to be 1; aka Level 1
    //multiply zeta with the 10 value
    //Math.random() * (zeta * 10)
    let x = Math.floor((Math.random() * 10) + 1);
    




    console.log(x);
    return x;
}

function operator(){
    let operator = ["+", "-"];
    let index = Math.floor((Math.random() * 2) + 0);

    return operator[index];

}


function run(){

    let x = readysetgo();


    $(".form-control").on("keyup", function(event){
        console.log("KEY REGISTERED");
        event.preventDefault();

        console.log(x);
        console.log($(".form-control").val());
        if(event.keyCode === 13){
            if( parseInt($(".form-control").val()) === x){
                console.log("CORRECT");

                $(".form-control").val('');
                playerInfo.score += 1;
                run();
            }
            else{
                //terminate!
                console.log(typeof($(".form-control").val()));
                console.log("TERMINATED");
            }



        }


    });
    




}