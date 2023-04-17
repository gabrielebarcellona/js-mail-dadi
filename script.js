/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

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

const mail = prompt('inserisci la tua mail')

 const ListaMail = [
    'pinopinocchio@gmail.com',
    'mastrogeppetto@libero.it',
    'filippoalbertone@gmail.com'
 ] 
 let hoTrovatoMail = 0

 for(let i = 0; i < ListaMail.length;i++){
   if(mail == ListaMail[i]){
    hoTrovatoMail = 1
   }
 }

 if (hoTrovatoMail ==0){
    console.log('email non autorizzata');
 } else {
    console.log('email autorizzata');
 }


 