'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnsCloseModel=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModal= function(){modal.classList.add('hidden');
                overlay.classList.add('hidden');}

btnsCloseModel.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

