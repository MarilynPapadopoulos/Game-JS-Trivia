
var timeLeft = 60;
var score=0;

var questionContainer = document.querySelector("#question");

var aOne = document.querySelector("#a1");
var aTwo = document.querySelector("#a2");
var aThree = document.querySelector("#a3");
var aFour =  document.querySelector("#a4");


var questionBox = [
    {q:"This is the first question.", choices:["1", "2", "3","4"], a: "1"},
    {q:"This is the second question.", choices:["11", "22", "33","44"], a: "22"},
    {q:"This is the third question.", choices:["5", "6", "7","8"], a: "7"},
    {q:"This is the fourth question.", choices:["10", "20", "30","40"], a: "40"}
];
 var questionIndex = 0;  

//create function to start game and timer
function startGame() {
   
    
        var timeEl = document.getElementById("timer");
        var timerId = setInterval(function() {
        timeLeft -=1;
            
            if(timeLeft <= 0) {
            clearInterval(timerId);
            }
            timeEl.innerText = timeLeft;
        
            console.log(timeLeft);
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
   
        questionContainer.textContent = questionBox[questionIndex].q; 

        aOne.textContent= questionBox[questionIndex].choices[0];
        aTwo.textContent= questionBox[questionIndex].choices[1];
        aThree.textContent= questionBox[questionIndex].choices[2];
        aFour.textContent= questionBox[questionIndex].choices[3];

        questionIndex++;
    }        
   
};

    function checkAnswer() {

    console.log(aOne.innerText);
        if (aOne.innerText == questionBox[questionIndex].a ||
            aTwo.innerText == questionBox[questionIndex].a ||
            aThree.innerText == questionBox[questionIndex].a ||
            aFour.innerText == questionBox[questionIndex].a) 


            {
                var resultEl=document.getElementById("result");
                    resultEl.textContent = "You are correct!";
                    score++;  
                    console.log(score);    
            }
            else{
                var resultEl=document.getElementById("result");
                resultEl.textContent = "You are wrong!";
                timeLeft -=5;
                console.log(timeLeft); 
            } 
            question(); 
    }  

   
aOne.addEventListener("click", checkAnswer);  
aTwo.addEventListener("click",checkAnswer)
aThree.addEventListener("click", checkAnswer); 
aFour.addEventListener("click", checkAnswer); 


function endGame () {
    timeLeft = 0;
    questionIndex = 0;
    aOne.textContent = "";
    aTwo.textContent = "";
    aThree.textContent = "";
    aFour.textContent = "";
    questionContainer.textContent = "";
}


var initals;



var displayScore = document.querySelector ("#highscore-page");
var displayScoreEl = document.createElement("div");
displayScoreEl.innerText = "Your score is " + score + "!";
displayScore.appendChild(displayScoreEl);

var getInitialsEl = document.createElement("form");
getInitialsEl.setAttribute ("type", "text");
getInitialsEl.setAttribute ("type", "Submit");
displayScore.appendChild(getInitialsEl);


/*var highScore=[];
var highScoreObj  = {
    intials: initials, score: score
}
*/
var saveScore = function() {
    localStorage.setItem("highScore", JSON.stringify(score));
}





    







