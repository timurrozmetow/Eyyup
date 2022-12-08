'use strict';

let gujuk = document.getElementById("gujuk_A"),
    goyun = document.getElementById("goyun_A"),
    at = document.getElementById("at_A"),
    arslan = document.getElementById("arslan_A");

const bebe = document.getElementById("goyun_S"),
    dog = document.getElementById("gujuk_S"),
    horse = document.getElementById("at_S"),
    lion = document.getElementById("arslan_S");

// function Myfunc(){
//     console.log('sdfsdv');
// } 

// console.log(click);
bebe.addEventListener('click', () =>{

    goyun.play();
});
dog.addEventListener('click', () => {
    gujuk.play();
});
horse.addEventListener('click', () => {
    at.play();
});
lion.addEventListener('click', () => {
    arslan.play();
});