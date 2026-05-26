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
const vals=document.querySelectorAll('.val')
const display = document.querySelector('.display')


// let displayString = "0";
let num1=""
let num2=""
let calc
// vals.forEach(btn=>btn.addEventListener('click',function(e){
//     console.log(e.target.textContent);
    
// })
// )
    
buttons.forEach(btn=>btn.addEventListener('click',function(e){
    if(btn.classList.contains('val')){
        if(calc===undefined){
            num1 += e.target.textContent;
        }else{
            num2 += e.target.textContent;
        }
        
    }else if(btn.classList.contains('calc')){
        if ((calc === undefined)) {
          calc = e.target.textContent==="➗" ?"/":
                 e.target.textContent==="✖️"?"*":
                 e.target.textContent==="➖"?"-":"+";
                 
        } else {
          num1=operate(+num1,+num2,calc)
          calc===undefined
          num2=""
          calc =
            e.target.textContent === "➗"
              ? "/"
              : e.target.textContent === "✖️"
                ? "*"
                : e.target.textContent === "➖"
                  ? "-"
                  : "+";

        }
        
    }else if(btn.classList.contains('equal')){
        if(num1!==undefined || num1!=="" && num2!==undefined || num2!=="null" && calc!==undefined || calc!== ""){
            num1=operate(+num1,+num2,calc)
            num2=''
            calc=""

        }
    }
     
    console.log({num1,num2,calc});
    showDisplay(num1, num2, calc);

    
}))
function showDisplay(num1,num2,calc){
    let op=calc||""
    let n2 =num2||''

  display.textContent =`${num1} ${op} ${n2}`
}

// buttons.forEach(btn=>btn.addEventListener('click',function(){
//     // check if button pressed is a number
//     const text = btn.textContent.trim()
//     const isNum = text !== "" && Number.isFinite(Number(text));
//     const isTog = text === "+/-";
//     const del =text ==="⌫"
//     const calc =document.querySelectorAll('.calc')
//     console.log(calc);
    
//     //  if is a number add it to the display
//     if(isNum){
//         if(displayString==="0"){
//             displayString=''
//             displayString = btn.textContent;
//         }else{
//             displayString += btn.textContent;
//         }
        
        
        
        
//     }else if(isTog){
//         if (!displayString.startsWith("-")&& displayString!==0){
//             displayString="-"+displayString
                  

//         }else{
//             displayString = displayString.slice(1);
                    

//         }
//     }else if(del){
//         displayString= displayString.slice(0,-1)
//         console.log(displayString);
        
//         if(displayString===""){
//             displayString="0"
//         }

//     }

        
//             display.textContent = displayString;
        
         

 
// }))

