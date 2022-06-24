``
console.log("Calculator. Add, Subtract, Divide, Multiply,Example. calculator(add,9,5,8)")

function calculator(a,b,...numbers){
  let operator = a.toLowerCase();
  console.log(operator)
  let total = b;

  switch (operator){
    case "add":
          for (number of numbers){
              total +=number
          }
          break;
    case "divide":
          for (number of numbers){
              total /=number
          }
          break;
    case "multiply":
          for (number of numbers){
              total *=number
          }
          break;
    case "subtract":
          for (number of numbers){
              total -=number
          }
          break;
         
  }
 return total;
  
}



console.log(calculator("add",4,5,6))