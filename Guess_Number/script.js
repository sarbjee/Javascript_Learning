'use strict';
/* ;

console.log(document.querySelector('.message').textContent);
=13;
document.querySelector('.guess').value=23;
 */

/*event listener */
let secretNumber=Math.trunc(Math.random()*20+1);


let score=20;


document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   // no input
   if(!guess){
    document.querySelector('.message').textContent= '🥹 No Number';
    // win
   } else if(guess===secretNumber){
    document.querySelector('.message').textContent= '🥳 Correct Number!';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width= '30rem';
    // too high
   } else if(guess > secretNumber){
    if(score>1){
    document.querySelector('.message').textContent= '🙌🏻 Too High !';
    score--;
    document.querySelector('.score').textContent=
    score;
    }else{
        document.querySelector('.message').textContent= '🙌🏻 You Lost The Game';
        document.querySelector('.score').textContent=0;
    }
    // too low
   } else if(guess< secretNumber){
    if(score>1){
    document.querySelector('.message').textContent= '🙌🏻 Too Low !';
    score--;
    document.querySelector('.score').textContent=
    score;
    }
    else{
        document.querySelector('.message').textContent= '🙌🏻 You Lost The Game';
        document.querySelector('.score').textContent=0;
    }
   }
});

document.querySelector('.again').addEventListener('click',function(){
    const secretNumber=Math.trunc(Math.random()*20+1);

    score=20;
    let guess= Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent="Start Guess !";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';


});