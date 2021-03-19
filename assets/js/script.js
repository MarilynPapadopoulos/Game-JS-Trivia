
var timeLeft = 60;
var score=0;

//create function to start game and timer
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
startGame();

   
    aOne = document.querySelector("#a1");
    aTwo = document.querySelector("#a2");
    aThree = document.querySelector("#a3");
    aFour =  document.querySelector("#a4");

    var questionBox = document.querySelector("#container");
    questionBox = [
        {q:"This is the first question.", choices:["1", "2", "3","4"], a: "1"},
        {q:"This is the second question.", choices:["11", "22", "33","44"], a: "22"},
        {q:"This is the third question.",choices:["5", "6", "7","8"], a: "7"},
        {q:"This is the fourth question.",choices:["10", "20", "30","40"], a: "40"}
    ];
        
    function question() {

        var clicked = event.target;
        var clickedText = clicked.innerText; 

    for(var i =0; i<questionBox.length; i++){
        console.log(questionBox[i]);

        aOne.textContent= questionBox[i].choices[0];
        aTwo.textContent= questionBox[i].choices[1];
        aOne.textContent= questionBox[i].choices[2];
        aOne.textContent= questionBox[i].choices[3];
       
        if (aOne.innerText === questionBox[i].a ||
            aTwo.innerText === questionBox[i].a ||
            aThree.innerText === questionBox[i].a ||
            aFour.innerText === questionBox[i].a) 
            {
                var resultEl=document.createElement("div")
                    resultEl.textContent = "You are correct!";
                    questionBox.appendChild(resultEl);
        
                    score++;  
                    console.log(score);    
            }
            else{
                resultEl.innerText = "You are wrong!";
                questionBox.appendChild(resultEl);
                timeLeft -=5;
                console.log(timeLeft); 
            }    
            
    
      

    }

    aOne.addEventListener("click", question);  
    aTwo.addEventListener("click",question)
    aThree.addEventListener("click", question); 
    aFour.addEventListener("click", question); 

};

   


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





    







