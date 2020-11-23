/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed ;
}

function greet(s){
  let timeH=s.split(":");
  timeH[0]=roughScale(timeH[0], 10);
  timeH[1]=roughScale(timeH[1], 10);

  if(timeH[1]>0){
    timeH[0]++;
  }
  console.log(timeH);
  if(timeH[0] <= 12){
    console.log("1");
    return "Good Morning";
  }
   if(timeH[0]< 17){
         console.log("2");
    return "Good Afternoon";
  }
   if(timeH[0] >= 17 ){
         console.log("3");
    return "Good Evening";
  }
  
} 
  
function displayMessage(s){
  let v= document.getElementById('greeting').innerText =s;
  
}
  
