//non curried function
const greeting1 = (greeting, name) => {
   return greeting + " " + name;
};
console.log(greeting1("hello", "jordan"));

// curried version
function greeting2(greeting) {
   return function (name) {
      return greeting + " " + name;
   };
}
console.log(greeting2("what's up"));
