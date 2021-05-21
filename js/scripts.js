//Eventos de los objetos
let vacationCalc = document.getElementById('vacationCalc');
vacationCalc.addEventListener('submit', calcExpenses);

//enviar info a calcExpenses

function getValues(){
    let destiny = document.getElementById('destiny').value,
        budget = document.getElementById('budget').value,
        acomodation = document.getElementById('acomodation').value,
        transport = document.getElementById('transport').value,
        food = document.getElementById('food').value;

        return  {destiny,budget,acomodation,transport,food}

}


// función de calcular objetos
function calcExpenses(e){
    e.preventDefault();
    
    const {destiny,budget,acomodation,transport,food} = getValues();

    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
    let balance = budget - expenses
    
    console.log(destiny,budget,acomodation,transport,food);
    UI(destiny,budget,balance);
    
}


//Función de impresión de objetos
function UI(destiny,budget,balance){
    let result = document.getElementById('result');
    let dataPrint = document.createElement('div');

    dataPrint.innerHTML = `
    <div class="container-data row">
        <div class="col s4">
         <h6>${destiny}</h6>
        </div>
        <div class="col s4">
         <h6>${budget}</h6>
        </div>
        <div class="col s4">
         <h6>${balance}</h6>
        </div>
    </div>
    `
    result.appendChild(dataPrint);

    reset();
}


//Función de reset
function reset(){
    document.getElementById('vacationCalc').reset
}