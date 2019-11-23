// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, 
// пока пользователь не откажется.
while (true) {
    let firstNumber = prompt("Enter first number");
    let symbol = prompt("Enter a sumbol");
    let secondNumber = prompt("Enter second number");
    let result = eval(firstNumber + symbol + secondNumber)//work only with strings
    alert(result)

    if (!confirm("Do you want to enter a new example?")) {
      break;
    }
}
