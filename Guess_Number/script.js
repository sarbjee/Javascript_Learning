'use strict';
let secretNumber=Math.trunc(Math.random()*20+1);


let score=20;
let highscore=0;

const displayMessage =(massage)=>    document.querySelector('.message').textContent
=massage;


document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   // no input
   if(!guess){
    displayMessage('🙌🏻 No Number');
   
   } // winning option
   else if(guess===secretNumber){
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width= '30rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=score;
    }



    // too high
   } else if(guess!==secretNumber){
 
        if(score>1){
        displayMessage(guess>secretNumber?'🙌🏻 Too High !':'🙌🏻 Too Low');
        score--;
        document.querySelector('.score').textContent=
        score;
        document.querySelector('.highscore').textContent
        =score;
        
        }else{
            displayMessage('🙌🏻 You Lost The Game');
            document.querySelector('.score').textContent=0;
        }
      
    }
  
});

document.querySelector('.again').addEventListener('click',function(){
    const secretNumber=Math.trunc(Math.random()*20+1);

    score=20;
    let guess= Number(document.querySelector('.guess').value);
    displayMessage("Start Guess !");
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';


});