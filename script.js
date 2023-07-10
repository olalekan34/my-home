let display = document.getElementById('input');


function dot() {
    display.value += '.'
}
function equal() {
    let solution = eval(display.value)
    console.log(solution);
    display.value = solution
}
function zero() {
    display.value += '0'
}
function add() {
    display.value += '+'
}
function three() {
    display.value += '3'
}

function two() {
    display.value += '2'
}

function one() {
    display.value += '1'
}

function minus() {
    display.value += '-'
}

function six() {
    display.value += '6'
}

function five() {
    display.value += '5'
}

function four() {
    display.value += '4'
}

function mul() {
    display.value += '*'
}

function nine() {
    display.value += '9'
}

function eight() {
    display.value += '8'
}

function sev() {
    display.value += '7'
}

function div() {
    display.value += '/'
}

function square() {
    display.value = Math.sqrt
}
function power() {
    display.value += '**'
}

function ac() {
    display.value = ''
}
