

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
    


    if( $(this).attr("value") === "yes" ){

        
        run();
        $("#ready").hide();
        $(".card").show();

    }

    else if ( $(this).attr("value") === "quit" ){
        
        window.location = "../index.html";
    }   



});







let count = 0;
let counter = 0;
let running = true;
let zeta = 0;
// let counter = 0;
//STARTS THE GAME
function readysetgo(){
    
    
    
    let sum = 0;
    let x = randomNum();
    let y = operator();
    
    let z = randomNum();

    count = 12 - zeta;
    counter = setInterval( countDown, 1000);
    

    $(".card-text").text(` ${x} ${y} ${z} `);

    
    
    if (y === "+"){
        sum = x + z;
    }
    else if (y === "-"){
        sum = x - z;
    }






    
    return sum;
};


function randomNum(){
    
    

    //TODO:
    //zeta is going to be 1; aka Level 1
    //multiply zeta with the 10 value
    //Math.random() * (zeta * 10)
    let x = Math.floor((Math.random() * 10) + 1);
    




    
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


function countDown(){
    console.log(count);

    if( running){
        //start countdown timer
        count = count - 1;
        console.log(count);
        $("#timer").text(`${count} secs`);

    
        console.log(running);
        if (count === 0){
            running = false;
        }




        
    }
    else if (!running){
        //stop countdown timer
        clearInterval(counter);
        

    }

    

}


function failure(){
    console.log("FAILURE INITIATED");




}









function run(){

    let x = readysetgo();


    $(".form-control").on("keyup", function(event){
        console.log("KEY REGISTERED");
        event.preventDefault();

        
        console.log($(".form-control").val());
        if(event.keyCode === 13){
            
            if( parseInt($(".form-control").val()) === x){
                console.log("CORRECT");
                
                $(".form-control").val('');
                iteration++;
                playerInfo.score += 1;
                clearInterval(counter);
                run();
            }
            else{
                
                //terminate!
                console.log(typeof($(".form-control").val()));
                console.log("TERMINATED");

                
            }



        }

        
        if( iteration === 3){

            //ZETA IS RESPONSIBLE FOR THE TIMER STARTING SHORTER AFTER EVERY COMBO
            if(zeta === 10){
                zeta = 10;
            }
            else if (zeta <= 9){
                zeta += 1 ; 
            }


            //THIS ACTIVATES THE SOUNDS FOR EVERY 3 (OR 4?) CONSECUTIVE RIGHT ANSWERS.
            soundByte(levelUp());
            iteration = 0;

        }












    });
    




}