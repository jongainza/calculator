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


const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display')


let displayString = "0";


buttons.forEach(btn=>btn.addEventListener('click',function(){
    // check if button pressed is a number
    const text = btn.textContent.trim()
    const isNum = text !== "" && Number.isFinite(Number(text));
    const isTog = text === "+/-";
    const del =text ==="⌫"
    //  if is a number add it to the display
    if(isNum){
        if(displayString==="0"){
            displayString=''
            displayString = btn.textContent;
        }else{
            displayString += btn.textContent;
        }
        
        
        
        
    }else if(isTog){
        if (!displayString.startsWith("-")&& displayString!==0){
            displayString="-"+displayString
                  

        }else{
            displayString = displayString.slice(1);
                    

        }
    }else if(del){
        displayString= displayString.slice(0,-1)
        console.log(displayString);
        
        if(displayString===""){
            displayString="0"
        }

    }

        
            display.textContent = displayString;
        
         

 
}))

