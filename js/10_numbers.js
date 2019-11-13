let stats = {
  zero: 0,
  positive: 0,
  negative: 0,
  even: 0,
  odd: 0,
};
let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`N${i+1}:`));

  if (num == 0) {
    stats.zero++;
  } else if (num > 0) {
    stats.positive++;
  } else {
    stats.negative++;
  }

  if (num % 2 == 0) {
    stats.even++;
  } else {
    stats.odd++;
  }

  numbers.push(num);
}

console.log(numbers);
console.log(stats);
