/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timestring) {
let HHMM = timestring.split(':').map (tyme => parseInt (tyme,0));
let currenttime=HHMM[0];

  if (currenttime < 12)
  {return`Good Morning`;
    }
else if (currenttime > 17)
 {return `Good Evening`;
 }
else 
 {return `Good Afternoon` }
}
/* Write your implementation of displayMessage() */

function displayMessage(strrr){ 
  document.getElementById("greeting").innerText = strrr;}
    