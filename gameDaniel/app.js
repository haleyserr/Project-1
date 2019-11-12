

const playerInfo = 
    {
        uid: "",
        score: 0,
        grade: 0,
        status: "in progress"

    };




console.log(playerInfo.uid);



let level = 0;
let iteration = -1;


const tripleC = document.createElement("audio");
tripleC.setAttribute("src", "./audio/TripleCombo.wav");

const hyperC = document.createElement("audio");
hyperC.setAttribute("src", "./audio/HyperCombo.wav");

const superC = document.createElement("audio");
superC.setAttribute("src", "./audio/SuperCombo.wav");

const brutalC = document.createElement("audio");
brutalC.setAttribute("src", "./audio/BrutalCombo.wav");

const masterC = document.createElement("audio");
masterC.setAttribute("src", "./audio/MasterCombo.wav");

const awesomeC = document.createElement("audio");
awesomeC.setAttribute("src", "./audio/AwesomeCombo.wav");

const blasterC = document.createElement("audio");
blasterC.setAttribute("src", "./audio/BlasterCombo.wav");

const monsterC = document.createElement("audio");
monsterC.setAttribute("src", "./audio/MonsterCombo.wav");

const kingC = document.createElement("audio");
kingC.setAttribute("src", "./audio/KingCombo.wav");

const killerC = document.createElement("audio");
killerC .setAttribute("src", "./audio/KillerCombo.wav");

const ultraC = document.createElement("audio");
ultraC.setAttribute("src", "./audio/UltraCombo.wav");

const ultimateC = document.createElement("audio");
ultimateC.setAttribute("src", "./audio/UltimateCombo.wav");

const sound = [
    {
        
        byte: [
            {
                play: tripleC
            },
            {
                play: hyperC
            },
            {
                play: superC
            },
            {
                play: brutalC
            },
            {
                play: masterC
            },
            {
                play: awesomeC
            },
            {
                play: blasterC
            },
            {
                play: monsterC
            },
            {
                play: kingC
            },
            {
                play: killerC
            },
            {
                play: ultraC
            },
            {
                play: ultimateC
            }
            
        ]

    }
]









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

function levelUp(){
    level++;

    console.log(level);
    return level;
}


function soundByte(index){
    
    
    if(index > 11){
        sound[0].byte[11].play.play();
    }
    else{
        sound[0].byte[index].play.play();
    }



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
                iteration++;
                playerInfo.score += 1;
                run();
            }
            else{
                
                //terminate!
                console.log(typeof($(".form-control").val()));
                console.log("TERMINATED");
            }



        }

        console.log(iteration);
        if( iteration === 3){
            soundByte(levelUp());
            iteration = 0;

        }












    });
    




}