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



const scores=[0,0];

diceElement.classList.add('hidden');

// rolling dice 
btnRoll.addEventListener('click',function(){

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
       // current0Element.textContent=currentScore;   
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
       // current0Element.textContent=currentScore;

    }else{
        // switch to the next player
        document.getElementById(`current--${activePlayer}`).textContent=0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
        currentScore=0;
        activePlayer=activePlayer === 0 ?  1: 0;
       
       
       

        
    }

});







