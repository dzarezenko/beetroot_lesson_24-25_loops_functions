function whoAmI(age) {
  if (isNaN(age)) {
    console.log("Неправильно введен возраст!");
  } else {
    if (age >=0 && age < 12) {
      console.log("Ребенок");
    } else if (age < 18) {
      console.log("Подросток");
    } else if (age < 60) {
      console.log("Взрослый");
    } else {
      console.log("Пенсионер");
    }
  }
}

//let age = parseInt(prompt("Введите возраст"));
/*whoAmI(4);
whoAmI(16);
whoAmI(33);
whoAmI(80);
whoAmI("name");
whoAmI(123.678);*/

/*for (let i = 0; i < 10; i++) {
  //console.log(Math.round(Math.random() * 120));
  let age = Math.floor(Math.random() * 120);
  whoAmI(age);
}*/

/*let a = 123;
let s = a.toString()
console.log(s);
console.log(typeof s);*/

let b = 1/3;
console.log(b);
console.log(b.toFixed(3));

Math.trunc()

//console.log(age);
//console.log(typeof age);
