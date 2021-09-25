var pessoa = {
    idade: 17,
    nome: {
        primeiro: 'Larissa',
        ultimo: 'Souza'
    },
    apelido: 'Lari',
    sexo: 'Feminino',
    hobbies: ['Ouvir musica', 'programar', 'cantar'],

    saudacao: function() {
        console.log(
            `Muito prazer! Meu nome é ${this.nome.primeiro} ${this.nome.ultimo}, mas todos me chamam de ${this.apelido}`
        )
    },

    bio: function() {
        console.log(
            `Tenho ${this.idade} anos de idade \n` +
            `Meus hobbies são: ${this.hobbies[0]}, ${this.hobbies[1]} ` +
            `e também gosto muito de ${this.hobbies[2]} `
        )
    }
}

console.log(pessoa)
console.log(pessoa.saudacao())
console.log(pessoa.bio())