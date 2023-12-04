'use strict';
const player0Element=document.querySelector('.player--0');

const player1Element=document.querySelector('.player--1');
const score0Element=document.querySelector('#score--0');
const score1Element=document.getElementById('score--1');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

const current0Element=document.getElementById('current--0');
const current1Elemet=document.getElementById('current--1');

const diceElement=document.querySelector('.dice');

let currentScore=0;

let activePlayer=0;
score0Element.textContent=0;
score1Element.textContent=0;
let playing=true;

const switchPlayer=function(){

     // switch to the next player
     document.getElementById(`current--${activePlayer}`).textContent=0;
     player0Element.classList.toggle('player--active');
     player1Element.classList.toggle('player--active');
     currentScore=0;
     activePlayer=activePlayer === 0 ?  1: 0;
}




const scores=[0,0];

diceElement.classList.add('hidden');

// rolling dice 
btnRoll.addEventListener('click',function(){
    if(playing){


    // genrating a random dice roll

    const dice=Math.trunc(Math.random()* 6) +1;

    console.log(dice);

    //display dice

    diceElement.classList.remove('hidden');
    diceElement.src=`dice-${dice}.png`;

    //check for the rolled 1 
    if(dice !==1){
        // add dice to current score
        
        currentScore+= dice;  
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
      

    }else{
        // switch to the next player
       switchPlayer();
    }
        
    }


});
btnHold.addEventListener('click',function(){
    // add current score to active player score 
  //scores[1]=scores[1]+ currentScore
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  

    // check if player score is >=100 finish the game 
    if(scores[activePlayer] >=20){
        playing=false;
        diceElement.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{

    // switch to the next player
     // switch to the next player
   switchPlayer();
    }
});

btnNew.addEventListener('click',function(){
    score0Element.textContent=0;
    score1Element.textContent=0;
    current0Element.textContent=0;
    current1Elemet.textContent=0;
    const scores=[0,0];
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    diceElement.classList.remove('hidden');
    playing=true;

});








