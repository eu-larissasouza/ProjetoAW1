/* ===== DEFININDO UMA FUNÇÃO ===== */
hello()

function hello() {
    console.log('Hello World!')
}

/* ===== FUNÇÃO ANÔNIMA - EXEMPLO 1 ===== */
/* ===== OBRIGATORIAMENTE TEM QUE CHAMAR A FUNÇÃO PELA VARIÁVEL  ===== */
var dot = function(num = 2) {
    return num * num
}

console.log(dot(4))

/* ===== FUNÇÃO ANÔNIMA - EXEMPLO 2 ===== */
var mult = function(num = 2) {
    return num * num
}

console.log(mult)

/* ===== ARROW FUNCTION - EXEMPLO 1 ===== */
let arrow = () => console.log('Olá Mundo')

arrow()

/* ===== ARROW FUNCTION - EXEMPLO 2 ===== */
var s = (num1 = 1, num2 = 2) => {
    let soma = num1 + num2
    return soma
}

console.log(s(2, 3, 4, 5))

/* ===== ARROW FUNCTION - EXEMPLO 3 ===== */

var dot = num => num * num

console.log(`Quadrado: ${dot(5)}`)

/* ===== FUNÇÃO NATIVA(GLOBAIS) - EXEMPLO 1 ===== */
var numbers = [1, 4, 9]

var result = numbers.map(num => {
    return Math.sqrt(num)
})

console.log(result)

/* ===== FUNÇÃO NATIVA(GLOBAIS) - EXEMPLO 2 ===== */
var str = '12345'

/* ===== FUNÇÃO SPLIT SEM VALOR PARA ARGUMENTO FAZ A DIVISÃO LETRA POR LETRA ===== */
/* ===== FUNÇÃO REVERSE TEM A FINALIDADE DE INVERTER A ORDER DO VETOR ===== */
/* ===== FUNÇÃO JOIN FAZ A JUNÇÃO DO VETOR E O TRANSFORMA EM UMA STRING NOVAMENTE ===== */
str = str.split('').reverse().join('')

console.log(str)

/* ===== FUNÇÃO NATIVA(GLOBAIS) - EXEMPLO 3 ===== */
var data = new Date()

console.log(data.getDate())
console.log(data.getMonth())
console.log(data.getFullYear())