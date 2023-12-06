function inflationCalculator() {

   let inflationRate = document.querySelector('#inflationRate');
   let money = document.querySelector('#money');
   let years = document.querySelector('#years');


   //parseFloat sluzi za pretvaranje stringa u broj sa decimalom
    years = parseFloat(years.value);
    inflationRate =  parseFloat(inflationRate.value);
    money =  parseFloat(money.value);



    //formula za izracunavanje inflacje
   let worth = money+(money*(inflationRate / 100 ));


   for ( let i = 1; i< years; i++){
    worth += worth * (inflationRate/100);
  }

  //skracujemo na 2 decimale
  worth = worth.toFixed(2);

  //kreiramo novi elemnt (div)
  let newElement = document.createElement('div');

  //dodajemo novu klasu elemntu
  newElement.classList = 'novi_element';

  //dodajemo novi tekst u promenljivu
  newElement.innerText = `Danasnjih  ${money}e vredi isto kao ${worth}e za ${years}`;

  //ispisjemo novi text na stranici(u donjem delu konteinera)
   document.querySelector('.container').appendChild(newElement) ;

  

}   

