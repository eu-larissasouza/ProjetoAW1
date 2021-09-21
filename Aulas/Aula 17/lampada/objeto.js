var pessoa = {
    idade: 17,
    nome: {
        primeiro: 'Larissa',
        ultimo: 'Souza'
    },
    apelido: 'Lari',
    sexo: 'Feminino',
    interesses: ['musica', 'web-design'],

    bio: function() {
        console.log(
            `${this.nome.primeiro} tem ${this.idade} anos de idade` +
            `Eu gosto de ${this.interesses[0]} e ${this.interesses[1]}`
        )
    },

    saudacao: function() {
        console.log(`Muito prazer! Eu sou a ${this.apelido}`)
    }
}