/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(u){
  let text=u.split(':');
  var sen="";
  let time=parseInt(text, 10);
  if (time<12){
    sen="Good Morning";}
  else if (time>12 && time<17){sen="Good Afternoon";}
  else {
    sen="Good Evening";
  }
  return(sen);
}
//console.log(greet("18:30"))

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(sen){
  document.getElementById('greeting').innerText=sen
}