/* JSLint plusPlus : true;*/

var previousVal = document.getElementById("calcValue");
var clearBtn = document.getElementById("ButtonClear");
var BackSpaceBtn = document.getElementById("ButtonDelete");
var numberBtn = document.getElementsByClassName("ButtonNumber");
var operationBtn = document.getElementsByClassName("Buttonoperator");
var decimalBtn = document.getElementById("Buttondecimal");
var equalBtn = document.getElementsByClassName("ButtonEqual");

// dislpay Number
var displayVal = '0';
var penddingVal;
var performOperator;

var updateDisplayVal = (clickObj) => {   // to display and update val
    var btnText = clickObj.target.innerText; // when click 5 btnText will be 5
    if (displayVal === '0')   // to check displayVAl
        displayVal = '';
    displayVal += btnText;
    previousVal.innerText = displayVal;

}

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', updateDisplayVal, false);
}
// clear Button (AC)
clearBtn.onclick = () => {
    displayVal = '0' ;
    penddingVal = undefined;
    previousVal.innerHTML = displayVal;

}
// backSpace Delete Button (DEl)
BackSpaceBtn.onclick = () => {
    let lengthDispalyVal = displayVal.length;
    displayVal = displayVal.slice(0,lengthDispalyVal - 1);
    previousVal.innerHTML = displayVal;
    if (displayVal === '')
        displayVal = '0';
    previousVal.innerHTML = displayVal;
}
// decimal button " point" (.)
decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    previousVal.innerHTML = displayVal;


}

// to display operator

var Operator = (clickObj) => {       // function operator
    console.log('clickObj.target.innerText', clickObj.target.innerText)
    performOperator = clickObj.target.innerText;
    if (displayVal !== '0')   // to check displayVAl
        displayVal += performOperator;
    previousVal.innerText = displayVal;
}

for (let i = 0; i < operationBtn.length; i++) {
    console.log(operationBtn,'operationBtn')
    operationBtn[i].addEventListener('click', Operator , false);

}

// for operation :

// function for each operator
function sum(){
    return displayVal.split('+').reduce((a, b) => +a + +b, 0);
}
function sub(){
    return displayVal.split('-').reduce((a, b) => a - b);
}
function mult(){
    return displayVal.split('×').reduce((a, b) => a * b);
}
function div(){
    return displayVal.split('÷').reduce((a, b) => a / b);
}

// for eaual:

function operate() {
    console.log(performOperator,'performOperator')
    switch (performOperator) {
        case "+":
            let add = sum();
            displayVal = add;
            previousVal.innerText = displayVal;
            break;
        case "-":
            let subtraction = sub();
            displayVal = subtraction;
            previousVal.innerText = displayVal;
            break;
        case "×":
            let multiple = mult();
            displayVal = multiple;
            previousVal.innerText = displayVal;
            break;
        case "÷":
            let division = div();
            displayVal = division;
            previousVal.innerText = displayVal;
            break;
        default:
            previousVal.innerText = displayVal;
    }
}

// for currencies 
function shekToDolr() {
    
    if (displayVal === '0') {
        window.alert('Enter value please!!')
    } else {
    var curren=displayVal;
    curren= curren / 3.44583;
   previousVal.innerText = curren.toFixed(4) +' $';
    return displayVal='';
    }
}

function shekToEuro() {
     if (displayVal === '0') {
        window.alert('Enter value please!!')
    } else {
    var curren=displayVal;
   
    curren= curren / 3.86169;
    previousVal.innerText= curren.toFixed(4) +' €';
    return displayVal='';
    }
}

function euroToShekel() {
     if (displayVal === '0') {
        window.alert('Enter value please!!')
    } else {
    var curren=displayVal;
    curren= curren * 3.86169;
    previousVal.innerText = curren.toFixed(4) +' ₪';
  return displayVal='';
    }
}

function dolrToShakel() {
  if (displayVal === '0') {
        window.alert('Enter value please!!');
    } else {
    var curren=displayVal;
    curren= curren * 3.44583;
   previousVal.innerText = curren.toFixed(4) +' ₪';
    return displayVal='';
    }
}












