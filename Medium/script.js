// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
// // prints "Each person gets 2.67 slices of pizza"

function pizza () {
    const cutPizzaSlices = 8
    return  cutPizzaSlices;
}
const sharePizza = pizza(8);

console.log(`Each person gets ${sharePizza /2} slices of pizza`)

console.log(`Each person gets ${sharePizza /3} slices of pizza`)