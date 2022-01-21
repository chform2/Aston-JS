// définitions
let outputElement = document.querySelector("section.content");

/**
 * Retourne si c'est un fizz, un buzz ou les 2
 * @param {number} n 
 */
function typeFB(n){
    if (n % 15 == 0){
        outputElement.innerHTML += `${n}: FizzBuzz<br>`;
    }else if (n % 3 == 0){
        outputElement.innerHTML += `${n}: Fizz<br>`;
    }else if (n % 5 == 0){
        outputElement.innerHTML += `${n}: Buzz<br>`;
    }else{
        outputElement.innerHTML += `${n}: ----<br>`;
    }
}

/**
 * boucle qui appelle la fonction typeFB
 */
function fizzBuzz(){
    for (var i = 1; i <= 100; i++) {
        typeFB(i);
    }
}

window.onload = function(){
    if(document.querySelector("section.exo3")){
        fizzBuzz();
    }
}