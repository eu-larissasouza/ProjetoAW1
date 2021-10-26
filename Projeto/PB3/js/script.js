var output = document.querySelector('#output')
var btn = document.querySelectorAll('.btn')

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', e => {
        btntext = e.target.innerText

        if (btntext == '×') {
            btntext = '*'
        }

        if (btntext == '÷') {
            btntext = '/'
        }

        output.value += btntext
    })
}

function allclear() {
    output.value = ''
}

function backspc() {
    output.value = output.value.substr(0, output.value.length - 1)
}

function compute() {
    output.value = eval(output.value)
}

function sin() {
    output.value = Math.sin(output.value)
}

function cos() {
    output.value = Math.cos(output.value)
}

function tan() {
    output.value = Math.tan(output.value)
}

function pow() {
    output.value = Math.pow(output.value, 2)
}

function power() {
    var a = output.value.substr('^')
    var b = output.value.substr('^')

    output.value = Math.pow(a, b)
}

function sqrt() {
    output.value = Math.sqrt(output.value, 2)
}

function log() {
    output.value = Math.log(output.value)
}

function pi() {
    output.value += 3.14159265359
}

function e() {
    output.value += 2.71828182846
}

function fact() {
    var i, num, f
    f = 1
    num = output.value
    for (i = 1; i <= num; i++) {
        f = f * i
    }

    i = i - 1

    output.value = f
}

function roundNumber() {
    output.value =
        output.value.length >= 10 ? Math.round(output.value, 8) : output.value
}