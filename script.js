let num1 = prompt("Число 1");
let oper = prompt("+, -, *, /");
let num2 = prompt("Число 2");

if (oper === "+") {
    result = num1 + num2;
} else if (oper === "-") {
    result = num1 - num2;
} else if (oper === "*") {
    result = num1 * num2;
} else if (oper === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Ошибка!";
    }
} else {
    result = "Ошибка!";
}
alert("Ответ!" + result);
