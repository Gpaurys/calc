var result = document.getElementById('result');
var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var button_plus = document.getElementById('op-plus');
var button_minus = document.getElementById('op-minus');
var button_mul = document.getElementById('op-mul');
var button_div = document.getElementById('op-div');
var button_mod = document.getElementById('op-mod');

function getV1() {
    return parseInt(v1.value);
}

function getV2() {
    return parseInt(v2.value);
}

function calculate(event) {
    var answer;

    switch (event.target.textContent) {
        case '+':
            answer = getV1() + ' + ' + getV2();
            break;
        case '-':
            answer = getV1() + ' - ' + getV2();
            break;
        case '*':
            answer = getV1() + ' * ' + getV2();
            break;
        case '/':
            answer = getV1() + ' / ' + getV2();
            break;
        case 'mod':
            answer = getV1() + ' % ' + getV2();
            break;
        default:
            return;
    }

    var expression = getV1() + ' ' + event.target.textContent + ' ' + getV2();

    result.innerText = expression + ' = ' + answer;
    alert(answer);
}

button_plus.addEventListener('click', calculate);
button_minus.addEventListener('click', calculate);
button_mul.addEventListener('click', calculate);
button_div.addEventListener('click', calculate);
button_mod.addEventListener('click', calculate);

button_plus.addEventListener('click', (event) => {
    var expression = getV1() + ' + ' + getV2();
    result.innerText = expression + ' = ' + eval(expression);
    alert(result.innerText);
});

button_minus.addEventListener('click', (event) => {
    result.innerText = getV1() - getV2();
    alert(result.innerText);
});

button_mul.addEventListener('click', (event) => {
    result.innerText = getV1() * getV2();
    alert(result.innerText);
});

button_div.addEventListener('click', (event) => {
    result.innerText = getV1() / getV2();
    alert(result.innerText);
});

button_mod.addEventListener('click', (event) => {
    result.innerText = getV1() % getV2();
    alert(result.innerText);
});

