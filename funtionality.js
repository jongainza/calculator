function add(a,b){
 return a + b
}
function subtract (a,b){
return a - b
}
function multiply (a,b){
 return a * b
}
function divide (a,b){
 return a / b
}

function operate(a,b,ope){
 switch(ope){
  case "+":
   return add(a,b);
   break;
   case "-":
   return subtract(a,b);
   break;
   case '*':
    return multiply(a,b);
    break;
    case '/':
     return divide(a,b);
     break;
 }
}
console.log('hello world');


const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display')


let displayString = "";


buttons.forEach(btn=>btn.addEventListener('click',function(){
    const text = btn.textContent.trim()
    const isNum = text !== "" && Number.isFinite(Number(text));

    if(isNum){
        console.log(text);
        
        displayString += btn.textContent;
        console.log(display);
        
        display.textContent=displayString
    }


 
 
}))

