// Average
// Write a function that takes in an array of numbers as a parameter.
// You can assume all values in the array are numbers.
// Find the average of the numbers
// return the average.

// test data
var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test2 = [52, 6, 109, 99, 78, 3, 1, -6]
var test3 = ['52', 'k', 109, '78', 'g', 89] //=>82

// Bonus Challenge:
// Use the reduce method. Before returing the average, round to the nearest whole number. How would you handle if there were strings, and some of the strings were letters and not numbers?

function average(arr){
  var filteredArr = arr.filter((val) => {
    val = +val
    if(isNaN(val)){
      return null
    }
    else{return +val}
  })
  return Math.round((filteredArr.reduce((prev, next) => prev + +next, 0))/filteredArr.length)
}

console.log(average(test3));


