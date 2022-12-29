// Countdown Sequence
// Stack : javascript
// A countdown sequence is a descending sequence of k integers from k down to 1 (e.g.
// 5, 4, 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the
// number of countdown sequences in the given array and y is the array of those
// sequences in the order in which they appear in the array.

// Example inputs and outputs:
// finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
// // 1 countdown sequence: 3, 2, 1
// finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// // 2 countdown sequences:
// // 5, 4, 3, 2, 1 and 3, 2, 1
// finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// // 3 countdown sequences:
// // 4, 3, 2, 1 ; 3, 2, 1 and 1
// finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]
// finalCountdown([]) ➞ [0, []]

const finalCountdown = (array) => {
    const reverseArr = array.reverse()
    let sequence = 0;
    let newArr = []
    let arr = []

    for (let i = 0; i < reverseArr.length; i++) {        
        if(reverseArr[i] === 1 && reverseArr[i] === reverseArr[i+1]){
            sequence++
            arr.unshift(reverseArr[i])
            newArr.unshift(arr);
            arr = []
        } else if( reverseArr[i] === 1 ) {
            if (!!arr.length){
                newArr.unshift(arr);
                arr = []
            }
            sequence++
            arr.unshift(reverseArr[i])
        } else if (reverseArr[i]-1 === reverseArr[i-1]){
            arr.unshift(reverseArr[i])
        }
        
        if (reverseArr[i] === reverseArr[reverseArr.length-1] &&!!arr.length){
            newArr.unshift(arr);
            arr = []
        }
    }

    return [sequence, newArr];
}

console.log(finalCountdown([4, 8, 3, 2, 1, 2])) // [1, [[3, 2, 1]]]
console.log(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1])) // [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
console.log(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1])) // [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
console.log(finalCountdown([1, 1, 2, 1])) // [3, [[1], [1], [2, 1]]]
console.log(finalCountdown([])) // [0, []]