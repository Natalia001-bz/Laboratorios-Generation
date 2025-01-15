const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// test para division

test('división de dos números ( 3/8)', () =>{
  expect(calculator.divide(3,8)).toBe(0.375);
})

test('división de dos números ( 756/25)', () =>{
  expect(calculator.divide(756,25)).toBe(30.24);
})

//test para multiplicación
test('multiplicación de dos números ( 25*40)', () =>{
  expect(calculator.multiply(25,40)).toBe(1000);
})

test('multiplicación de dos números ( 2*8)', () =>{
  expect(calculator.multiply(2,8)).toBe(16);
})


// Ejercicio 4 Refactorizar pruebas


// test('división de dos números ( 356/0)', () =>{     //*  Caso 4: división por cero
//   expect(calculator.divide(356,0)).toBe(356);
// })


 test('división de dos números ( 890/0)', () =>{
  expect(calculator.divide(890,0)).toBe("Error: No es posible la división por cero");
 })

