const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#whack-a-mole-score')
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let stats = 0;



function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    console.log(stats)
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
    

  
})

function moveMole(){
    timerId = setInterval(randomSquare, 1000);  
   
}
function stopMole(){
    clearInterval(timerId)
    clearInterval(countDownTimerId)
}

function restartMole(){

    timerId =setInterval(randomSquare, 1000)
    countDownTimerId = setInterval(countDown, 1000)
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over!! You final score is '+result)
    }
}
let countDownTimerId = setInterval(countDown, 1000)


document.getElementById('wam-reset').addEventListener('click', reset);

function reset() {
    currentTime = 61;  
    currentTime--;
    timeLeft.textContent = currentTime; 
    timerId = null;
    result = 0;
    score.textContent = result;
    
    countDownTimerId = setInterval(countDown, 1000)
    timerId = setInterval(randomSquare, 1000);
    
     
}

