/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(y) {
  let x = y.split(' ')
  let parsed = parseInt(x[0]);
  if (parsed < 12) {
    return ('Good Morning')
  }
  if (parsed > 12 && parsed < 17) {
    return ('Good Afternoon')
  }
  if (parsed > 18 && parsed < 24) {
    return ('Good Evening')
  }

}
function displayMessage(greet) {
  document.querySelector('#greeting').innerText = greet;

}
