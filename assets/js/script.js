
var timeLeft = 60;
var score=0; 
var intials;
var questionContainer = document.querySelector("#question");

var aOne = document.querySelector("#a1");
var aTwo = document.querySelector("#a2");
var aThree = document.querySelector("#a3");
var aFour =  document.querySelector("#a4");
var submitButton = document.querySelector("#submit");
var intialsInput =document.querySelector("#user-initials");

var questionBox = [
    {q:"This is the first question.", choices:["1", "2", "3","4"], a: "1"},
    {q:"This is the second question.", choices:["One", "Two", "Three","Four"], a: "Two"},
    {q:"This is the third question.", choices:["I", "II", "III","IV"], a: "III"},
    {q:"This is the fourth question.", choices:["1ST", "2ND", "3RD","4TH"], a: "4TH"}
];

var questionIndex = 0;  

//create function to start game and timer
function startGame(e) {
        e.preventDefault;
        var timeEl = document.getElementById("timer");
        var timerId = setInterval(function() {
        timeLeft -=1;
            
            if(timeLeft <= 0) {
            clearInterval(timerId);
            }
            timeEl.innerText = timeLeft;
        
            
         },1000)
    
    question();
};

var startEl = document.querySelector("#start-button");
startEl.addEventListener("click", startGame);
   
   
function question() {
    
    if (questionIndex >= questionBox.length){
        endGame();
    }
    else {

    //display question    
    questionContainer.textContent = questionBox[questionIndex].q; 

    aOne.textContent= questionBox[questionIndex].choices[0];
    aTwo.textContent= questionBox[questionIndex].choices[1];
    aThree.textContent= questionBox[questionIndex].choices[2];
    aFour.textContent= questionBox[questionIndex].choices[3];
    }        
   
};

//check if answers are correct   
aOne.addEventListener("click", function(){
    if (aOne.innerText == questionBox[questionIndex].a) {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are correct!";
        score++;     
    }
    else {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are wrong!";
        timeLeft -=5;
     }
    questionIndex++;
    question(); 
});
aTwo.addEventListener("click",function(){
    if(aTwo.innerText == questionBox[questionIndex].a ) {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are correct!";
        score++;     
    }
    else {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are wrong!";
        timeLeft -=5;
    }
    questionIndex++;
    question();    
});
aThree.addEventListener("click", function(){
    if (aThree.innerText == questionBox[questionIndex].a) {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are correct!";
        score++;    
    }
    else {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are wrong!";
        timeLeft -=5; 
    }
    questionIndex++;
    question(); 
});
aFour.addEventListener("click", function(){
    if (aFour.innerText == questionBox[questionIndex].a) {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are correct!";
        score++;      
    }
    else {
        var resultEl=document.getElementById("result");
        resultEl.textContent = "You are wrong!";
        timeLeft -=5; 
    }
    questionIndex++;
    question(); 
});

function endGame() {
    timeLeft = 0;
    questionIndex = 0;
    // aOne.textContent = "";
    // aTwo.textContent = "";
    // aThree.textContent = "";
    // aFour.textContent = "";
    // questionContainer.textContent = "";

     saveScore();
 }



function saveScore() {

var displayScore = document.querySelector ("#scoreBoard");
var displayScoreEl = document.createElement("div");
displayScoreEl.textContent = "Your score is " + score + "!";
displayScore.appendChild(displayScoreEl);

 };

var scoreBoard =[];

submitButton.addEventListener("click",function(e){
    e.preventDefault(); 
    console.log(intialsInput.value);
    console.log(score); 
    var userScore  = {
        intials: intialsInput.value, 
        score: score
    }
    console.log(userScore);
    var scores = JSON.parse(localStorage.getItem("highScoreBoard"));
    scores.push(userScore);

   
    localStorage.setItem("highScoreBoard", JSON.stringify(scores));
console.log(scoreBoard);
 

var highScoresBoard = document.querySelector("#high-scores-board");
var highScoresBoardEl =document.createElement("div");
highScoresBoard.appendChild(highScoresBoardEl);
console.log(scores);
highScoresBoard.textContent= scores.value;

    
});  



 





