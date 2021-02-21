/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(string) {
  const arr = string.split(':');
  const t = parseInt(arr[0]);
  if (t < 12) {
    console.log("Good Morning");
  } else if (t >= 12 && t <= 17) {
    console.log("Good Afternoon");
  } else if (t > 17) {
    console.log("Good Evening");
  }
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
