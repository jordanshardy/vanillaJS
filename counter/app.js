// set initial value
var count = 0;
// creat a variable that selects the value id's
const value = document.querySelector("#value");
//create a variable that selects ALL of the buttons
const btns = document.querySelectorAll(".btn");
//loop over all of the buttons
btns.forEach((btn) => {
   // add event listener with button event, event listener on button
   //check which button user clicks, event object has a currentTarget
   btn.addEventListener("click", (e) => {
      // classList is a list of attributes of the element
      // set variable styles to === the current buttons classlist
      const styles = e.currentTarget.classList;
      // if the button (target) has a specific class of "decrease" then count --
      if (styles.contains("increase")) {
         count++;
         //else if increase count ++
      } else if (styles.contains("decrease")) {
         count--;
         //else (reset button) count 0
      } else {
         count = 0;
      }
      // change color of values
      // if count is greater than 0 green
      if (count > 0) {
         value.style.color = "green";
         //if count is less than 0 red
      } else if (count < 0) {
         value.style.color = "red";
         //else black
      } else {
         value.style.color = "black";
      }
      value.textContent = count;
   });
});
