//console.log("!!!");

/*let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}*/

/*let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
console.log(i);*/

/*let i = 0;
do {
  console.log(i);
  i++;
} while (false);
console.log(i);*/

let i = 0;
while (true) {

  if (i == 5) {
    i++;
    continue;
  }

  if (i == 10) {
    break;
  }

  console.log(i);

  i++;
}
