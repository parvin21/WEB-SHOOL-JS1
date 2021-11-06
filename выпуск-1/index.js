//  'Nikita' -> 'Hi, Nikita'
 const hiFunction =  {
    name: "Hi,Nikita"
}
console.log(hiFunction.name)

// 5, 6 -> 11
 const sum = [5, 6].reduce(add, 0);
function add(accumulator, a) {
    return accumulator + a;
  }
console.log(sum);


//5 -> false
//0 -> true
//4 -> true
const isEven = num => num % 2 === 0;
console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(0));

// 2 -> i have 2 apples
 const apples = () => {
    //code here
}
// 4 -> 16
 const getPower = Math.pow(4, 2);
console.log(getPower)

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
