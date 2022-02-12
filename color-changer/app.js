const colors = [
   "green",
   "red",
   "blue",
   "orange",
   "purple",
   "yellow",
   "teal",
   "brown",
   "grey",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
   const randomColor = getRandomNumber();
   document.body.style.backgroundColor = colors[randomColor];
   color.textContent = colors[randomColor];
   document.getElementById("changeColor").style.color = colors[randomColor];
});

var getRandomNumber = () => {
   return Math.floor(Math.random() * colors.length);
};
