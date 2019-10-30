let a = parseInt(prompt("A?"));
let b = parseInt(prompt("B?"));

let c = Math.min(a, b);
for (; c >= 1; c--) {
  if (a % c == 0 && b % c == 0) {
    console.log("C = ", c);
    break;
  }
}
