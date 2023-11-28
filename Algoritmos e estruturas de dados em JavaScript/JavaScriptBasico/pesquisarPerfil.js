// Configuração
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// função para buscar valores e propriedades no objeto contacts
function lookUpProfile(name, prop) {
  //para percorrermos o objeto usamos o laço for.
  for (let i = 0; i < contacts.length; i++) {
    // verificamos se o contato existe
    if (contacts[i]) {
      // comparamos o argumento inserido com o valor da propriedade firstName de cada índice do array, se for true avançamos
      if (name === contacts[i].firstName) {
        // verificamos se o objeto tem a propriedade inserida, usando o método hasOwnProperty
        if (contacts[i].hasOwnProperty(prop)) {
          // caso todas seja validas retornamos o valor da propriedade
          return contacts[i][prop];
        } else {
          //caso seja false, retornamos que a propriedade não existe
          return 'No such property';
        }
      }
    }
  }
  // caso o nome inserido esteja fora do objeto contacts, damos o retorno negativo.
  return 'No such contact';
  // Altere apenas o código acima desta linha
}
//testes
lookUpProfile('Bob', 'number');
