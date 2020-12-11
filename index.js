/* Given Code, don't edit */

document.querySelector("button").addEventListener("submit", handleClick);

function handleClick(e) {
  e.preventDefault();
  const timeString = parseInt(document.getElementById('time').value.split(":"))

  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let hour = parseInt(string,10)
  if(hour < 12){
    return "Good Morning";
  }
  else if(hour >= 12 && hour <= 17){
    return "Good Afternoon";
  }
  else if(hour > 17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
