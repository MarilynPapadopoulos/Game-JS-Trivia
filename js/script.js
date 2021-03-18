





var timeLeft = 60;

function startGame() {
    var startEl = document.querySelector("#start-button");
    startEl.addEventListener("click", function() {
    
        var timeEl = document.getElementById("timer");
        var timerId = setInterval(function() {
        timeLeft -=1;
        
            if(timeLeft <= 0) {
            clearInterval(timerId);
            }
            timeEl.innerText = timeLeft;
        
            console.log(timeLeft);
    
         },1000)

    })

};



var startEl = document.querySelector("#start-button");
startEl.addEventListener("click", function() {
    
    
    var timeEl = document.getElementById("timer");
    var timerId = setInterval(function() {
        timeLeft -=1;
        
        if(timeLeft <= 0) {
            clearInterval(timerId);
        }
        timeEl.innerText = timeLeft;
        
        console.log(timeLeft);
    
    },1000)

});


var score=0;
var initals;
//the div that contains questions and answers
var questionBox = document.querySelector("#container");

var aOne = document.querySelector("#a1");

aOne.onclick=function() {
         
       var resultEl=document.createElement("div")
       resultEl.textContent = "You are correct!";
       questionBox.appendChild(resultEl);

       score++;  
       console.log(score);

}

var aTwo = document.querySelector("#a2");
aTwo.addEventListener("click", function() {
     
    var resultEl=document.createElement("div")
    resultEl.innerText = "You are wrong!";
    questionBox.appendChild(resultEl);
    timeLeft -=5;  
    console.log(timeLeft);
}, {once: true});


var aThree = document.querySelector("#a3");
var aFour = document.querySelector("#a4");

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





    







