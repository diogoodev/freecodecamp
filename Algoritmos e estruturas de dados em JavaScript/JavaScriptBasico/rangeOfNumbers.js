/*
Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.
*/

//Começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum
function rangeOfNumbers(startNum, endNum) {
  //O número inicial sempre será menor ou igual ao número final.
  if (startNum > endNum) {
    return [];
  } else {
    // Cria um array para armazenar a sequencia de números
    // Chama recursivamente a função rangeOfNumbers, o numero inicial(startNum) é acrecido de mais até chegar no numero final(endNum)
    const myArray = rangeOfNumbers(startNum + 1, endNum);
    // Adiciona o número inicial ao inicio do array
    myArray.unshift(startNum);
    // Retorna o array preenchido com a sequencia de números.
    //O ciclo se repete até que o startNum seja maior que o endNum
    return myArray;
  }
}

rangeOfNumbers(1, 4);
