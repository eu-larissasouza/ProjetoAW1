const arquivo = document.getElementById('luz')

arquivo.addEventListener('mouseover', ligaLamp)
arquivo.addEventListener('mouseleave', desligaLamp)
arquivo.addEventListener('click', quebraLamp)

function lampQuebrada() {
    return arquivo.src.indexOf('quebrada') > -1
}

function ligaLamp() {
    if (!lampQuebrada()) {
        arquivo.src = 'imagens/acesa.jpg'
    }
}

function desligaLamp() {
    if (!lampQuebrada()) {
        arquivo.src = 'imagens/apagada.jpg'
    }
}

function quebraLamp() {
    arquivo.src = 'imagens/quebrada.jpg'
}