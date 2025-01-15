const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

// function divide(a, b){             //* Versión original de la funcion divide
 
//   return a / b;
// }
 function divide(a, b){  
  if(  b  == 0){  
     return "Error: No es posible la división por cero";
   } else{
    return a / b;
 }
 }


function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};