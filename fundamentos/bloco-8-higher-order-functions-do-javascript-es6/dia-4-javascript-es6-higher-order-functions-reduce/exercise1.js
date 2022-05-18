const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
//   function flatten() {
//     // escreva seu código aqui
//   }

const sumArray = arrays.reduce((acumular, index) => (acumular + index));
console.log(sumArray);