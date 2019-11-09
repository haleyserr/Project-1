let correct = 0;
const questions = [{
    question: "When did Christopher Columbus sail across the Atlantic Ocean?",
    answer: "1492",
    fake: "1512",
    fake2: "1812",
    fake3: "1792",
},
{
    question: "Who is the president on the quarter?",
    answer: "George Washington",
    fake: "Abraham Lincoln",
    fake2: "Franklin D. Roosevelt",
    fake3: "George Bush",
},
{
    question: "Who was the 10th president of the United States?",
    answer: "John Tyler",
    fake: "Abraham Lincoln",
    fake2: "John Adams",
    fake3: "George Washington",
},
{
    question: "What war was fought between the North and South sections of The United States?",
    answer: "Civil War",
    fake: "War of 1812",
    fake2: "World War I",
    fake3: "Indian War",
},
{
    question: "What were the first 10 amendments of the Constitution called?",
    answer: "Bill of Rights",
    fake: "10 commandments",
    fake2: "Bill of Rites",
    fake3: "Doctorine of human rights",
},
{
    question: "What group of settlers in the Americas first celebrated Thanksgiving?",
    answer: "Pilgrims",
    fake: "Indians",
    fake2: "French",
    fake3: "British",
},
{
    question: "Who is the President on the half dollar that was assasinated in Dallas, Texas?",
    answer: "John F. Kennedy",
    fake: "Abraham Lincoln",
    fake2: "James A. Garfield",
    fake3: "William McKinley",
},
{
    question: "Who did the United States buy the Lousiana Purchase from?",
    answer: "Napoleon Bonaparte",
    fake: "Napolean Dynamite",
    fake2: "Julius Caesar",
    fake3: "King James",
},
];

function quiz (){
    correct = 0;
    for (let i = 0; i<questions.length; i++){
        $("#questionNumber").text("Question "+(i+1));
        $("#questionText").text(questions[i].question);



        $(".primary").on("click", function (event){
            i++;
        });


        
    };
};

quiz();

