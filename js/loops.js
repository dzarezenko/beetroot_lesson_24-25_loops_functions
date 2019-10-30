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

/*et i = 0;
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
}*/

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
arr.forEach((val, index) => {
  console.log(val);

  console.log(arr[index]);
});
