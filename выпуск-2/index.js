// [1, 5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [ 1, 5, 2 ];
  
console.log(arr.sort(compare)) 


// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
export const deepSorting = () => {
    //code here
}




// ['d', 1, 3, null] -> [1, 3]
export const getNumbers = () => {
    //code here
}




// [1, 5, 34, -100] -> -100
const min = Math.min(1, 5, 34, -100)
console.log(min)



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
export const getSet = () => {
    //code here
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
export const findTheMostReapetedEls = () => {
    //code here
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
export const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
export const checkForBadWord = () => {
    //code here
}

export const customSome = () => {
    //code here
}

export const customFind = () => {
//code here
}

export const customMap = () => {
    //code here
}

export const customReducer = () => {
    //code here
}

export const custonFilter = () => {
    //code here
}
