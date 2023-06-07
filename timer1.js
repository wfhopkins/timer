// const timer = (delays) => {
//   for (const delay of delays){  
//     setTimeout(() => {
//       process.stdout.write("x07");
//     }, delay * 1000);
//   }
//     setTimeout(() => {
//       process.stdout.write("\n");
//     }, delays * delays.length -1);
//   };


// code provided with mentor. i don't
// undertand why mine doesn't work or
// why theirs does. yay "learning"
const beep = function() {
  process.stdout.write("!!!");
}
const shadowBeep = function(delay) {
  delay = Number(delay);
  setTimeout(() => {
    beep();
  }, delay * 1000);

}
setTimeout(() => {
  process.stdout.write("\n");
  }, delay * spinParts.length - 1);

const number = process.argv.slice(2);
  for (const num of number) {
    shadowBeep(num);
  }
// timer();

// // Bot suggestion
// const args = process.argv.slice(2);
//   for (const arg of args) {
//     const delay = parseFloat(arg);
//     if (!isNaN(delay) && delay >= 0) {
//         setTimeout(() => {
//           process.stdout.write("x07");
//         }, delay * 1000);
//     }
//   };