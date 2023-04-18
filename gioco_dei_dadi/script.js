/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/




const eleButton = document.getElementById('btn-play') 
const eleScoreUser = document.getElementById('score-player') 
const eleScoreComputer = document.getElementById('score-computer') 
const eleOutput = document.querySelector('.output')



eleButton.addEventListener('click',function(){
    const number1 = Math.floor(Math.random()*6)+ 1
    const number2 =  Math.floor(Math.random()*6)+ 1


    eleScoreUser.innerHTML = number1;
    eleScoreComputer.innerHTML = number2


console.log(number1 , number2)

let message;

if(number1 > number2){
  message = 'hai vinto'
}else if (number2 > number1){
    message = 'ha vinto il computer'
}else{
    message = 'avete pareggiato'
}

eleOutput.innerHTML = message;
console.log(message)
})