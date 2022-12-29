// Jake's Meal Time
// Stack : javascript
// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at
// 12:00 p.m. and dinner at 7:00 p.m. in the evening.
// Create a function that takes in the current time as a string and determines the duration
// of time before Jake's next meal. Represent this as an array with the first and second
// elements representing hours and minutes, respectively.
// Example inputs and outputs:
// timeToEat("2:00 p.m.") ➞ [5, 0]
// // 5 hours until the next meal, dinner
// timeToEat("5:50 a.m.") ➞ [1, 10]
// // 1 hour and 10 minutes until the next meal, breakfast

const timeToEat = (str) => {
    const strArr = str.split(' ');
    const time = strArr[0].split(':')
    const periods = strArr[1]
    let hour = parseInt(time[0]);
    let nextMeal;

    if(hour > 12|| parseInt(time[1]) > 60 ) return 'Give an appropriate time';

    if(hour !== 12 && periods === 'p.m.') {
       hour += 12
    }

    if(hour === 12 && periods === 'a.m.') {
        hour = 0
    }

    const min = hour * 60 + parseInt(time[1]);


    if (min <= 420) {
        nextMeal = countTime(min, 420);
        console.log(`// ${nextMeal[0]} hour and ${nextMeal[1]} minutes until the next meal, breakfast`)
    } else if (min <= 720)  {
        nextMeal = countTime(min, 720);
        console.log(`// ${nextMeal[0]} hour and ${nextMeal[1]} minutes until the next meal, lunch`)
    }  else if (min <= 1140) {
        nextMeal = countTime(min, 1140);
        console.log(`// ${nextMeal[0]} hour and ${nextMeal[1]} minutes until the next meal, dinner`)
    } else {
        nextMeal = countTime(min, 1860);
        console.log(`// ${nextMeal[0]} hour and ${nextMeal[1]} minutes until the next meal, breakfast`)
    }
    return nextMeal;  
}

const countTime = (min, hour) =>{
    let restHours = parseInt((hour - min) /60);
    let restMin = 60 - (min % 60);
    if(min % 60 === 0) restMin = 0
    return [restHours,restMin]
}

console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:50 a.m."))
console.log(timeToEat("6:30 a.m."))