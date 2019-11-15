

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
let x = 0;
let videoI = 0;




let count = 0;
let counter = 0;
let running = true;

let zeta = 0;



//COMBO SOUND EFFECTS INITIALIZATION
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




//SUCCESS AND FAILURE INITIALIZATION || THESE ARE NOT IN THE 'SOUND' OBJECT
const task = document.createElement("audio");
task.setAttribute("src", "./audio/task.mp3");

const error = document.createElement("audio");
error.setAttribute("src", "./audio/error.mp3");

const fight = document.createElement("audio");
fight.setAttribute("src", "./audio/fight.wav");

const gameover = document.createElement("audio");
gameover.setAttribute("src", "./audio/gameover.wav");

const theme = document.createElement("audio");
theme.setAttribute("src", "./audio/theme.mp3");




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





const video = document.getElementById("video1");
const videoA = ["fire1","fire2", "fire3", "fire4", "fire5"];





$(".card").hide();

playerInfo.uid = uidSelect;
console.log(playerInfo.uid);
console.log(uidSelect);


//CLICKING YES WOULD START THE GAME BY RUNNING READYSETGO()
//CLICKING NO WOULD GO BACK TO LOGIN SCREEN
$(".btn").on("click", function(){
    


    if( $(this).attr("value") === "yes" ){
        
        //REINITIALIZING AFTER A FAIL-STATE! 
        theme.play();
        fight.play();
        count = 12;
        running = true;
        iteration = -1;
        zeta = 0;
        playerInfo.score = 0;
        level = 0;
        videoI = 0;
        
        
        run();

        $("#ready").hide();
        $("#again").hide();
        $(".card").show();

    }

    else if ( $(this).attr("value") === "quit" ){
        
        window.location = "../index.html";
    }   



});








// let counter = 0;
//STARTS THE GAME
function readysetgo(){
    
    count = 12 - zeta;
    counter = setInterval( countDown, 1000);
    
    
    let sum = 0;
    let x = randomNum();
    let y = operator();
    
    let z = randomNum();


    $(".card-text").text(` ${x} ${y} ${z} `);

    
    
    if (y === "+"){
        sum = x + z;
    }
    else if (y === "-"){
        sum = x - z;
    }






    console.log(`SUM IS ${sum}`);
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
    
    $("#video1").show();



    if(level % 2 === 0 || level === 1 ){
        if(videoI === 5){
            console.log("MAX VIDEO LENGTH REACHED");
        }
        else{

            $("#video1").attr("src", `./video/${videoA[videoI]}.mp4`);
            videoI += 1;
        }
        
    }

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
    

    if( running){
        //start countdown timer
        count = count - 1;
        
        $("#timer").text(`${count} secs`);

    
        
        if (count === 0){
            running = false;
        }




        
    }
    else if (!running){
        //stop countdown timer
        clearInterval(counter);
        failure();
        

    }

    

}


function failure(){
    console.log("FAILURE INITIATED");
    gameover.play();
    $("#video1").hide();
    
    running = false;
    $(".card").hide();
    

    $("#again").show();

    $(".form-control").val('');

    error.play();
    



}





function run(){

    let x = readysetgo();



    $(".form-control").off().on("keyup", function(event){
        console.log("KEY REGISTERED");
        event.preventDefault();
        console.log(`SUM IS ${x}`);

        
        let y = parseInt($(".form-control").val())
        if(event.keyCode === 13){
            
            if( y === x){
                console.log(`CORRECT! Y IS ${y}. X IS ${x}`);
                
                $(".form-control").val('');
                iteration++;
                playerInfo.score += 1;
                $("#score").text(`Score: ${playerInfo.score}`);
                clearInterval(counter);
                task.play();
                $( "body" ).off( "keyup", ".form-control", run );
                x = readysetgo();
                
                
            }
            else if ( y != x){
                
                //terminate!
                console.log("TERMINATED");
                running = false;
                return;

                
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