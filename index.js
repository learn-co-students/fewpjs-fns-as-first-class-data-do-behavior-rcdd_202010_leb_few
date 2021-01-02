/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
 let hour="";
 let min="";
 for (let i in str){
    if (i<=1){
    hour+=str[i];
    }
  }
  let intHour=parseInt(hour);
  if (intHour<12){
    return ("Good Morning")
  }
  if (intHour>17){
    return ("Good Evening");
  }
 
    return ("Good Afternoon");
  
}
/* Write your implementation of displayMessage() */
let btm=getElementById("add");
btm.addEventListener('click',displayMessage);

function displayMessage(s){
 
 document.getElementById('greeting').innerText=s;
}
