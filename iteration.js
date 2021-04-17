'DSA Iteration'

'1. Counting Sheep'

function countingSheep(num) {
    for (let i = num; i > 0; i--) {
        console.log(`${i} sheep jumped over the fence...`)
    }
    return console.log('All the sheep jumped over the fence')
}

//countingSheep(3)


'2. Power Calculator'

function powerCalculator(base, exponent) {
    let num = base
    if (exponent <= 0) {
        return console.log('exponent must be a positive integer')
    }
    for (let i = exponent; i > 1; i--) {
        num *= num
    }
    return num
}
//console.log(powerCalculator(10,2))


'3. Reverse String'

// DIFFERENT TYPES OF SOLUTION
// 1- for loop concat new string
// 2- split array

let string1 = 'amazon'
let string2 = 'bananna'
let string3 = 'nozama'

function reverseConcat(string) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        newString = string[i] + newString
    }
    return newString
}

//console.log(reverseConcat(string1))

function reverseArray(string) {
    let arr = []
    //split, reverse, join
    //return arr
    return arr = string.split('').reverse().join('')
}

//console.log(reverseArray(string3))


'4. nth Triangular Number'

//n = number of sides
//let dotsTotal = dotsTotal + i - 1
//return dotsTotal

function triangleNumber(n) {
    let dotsTotal = n
    for (let i = n; i > 0; i--) {
        dotsTotal += i - 1
    }
    return dotsTotal
}

//console.log(triangleNumber(6))


'5. String Splitter'

let inputDate = '02/20/2020/'
//Output: ["02", "20", "2020"]

//with .split()
//create array
//split at '/'

function stringWithSplit(input) {
    return input.split('/')
}

//console.log(stringWithSplit(inputDate))

//index through the string
//if string[i] === '/'

function stringSplitter(input) {
    let arr = []
    let newArr = []
    let string = ''
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i])
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(string)
        console.log(newArr)
        if (arr[i] === '/') {
            newArr.push(string)
            string = ''
        }
        string += arr[i]
    }
    return newArr
}

//console.log(stringSplitter(inputDate))


'6. Fibonacci'

//let x
//let y
//let total
//takes an nth
//returns a total

function Fibonacci(nth) {
    let x = 1
    let y = 0
    let z
    if (nth <= 0) { 
        return console.log('must be positve integer')
    }
    if (nth === 1 || nth === 2) {
        return 1
    }
    while (nth > 0) {
        z = x
        x = x + y
        y = z
        nth--
    }
    return y
}

//console.log(Fibonacci(7))


'7. Factorial'

function Factorial(num) {
    if (num <= 0) {
        return 'must be positive integer'
    }
    let total = 1
    while (num > 0) {
        total = total * num
        num--
    }
    return total
}

//console.log(Factorial(5))


'8. Find a way out of the maze'

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]


'10. Anagrams - all permutations of a string' 

function anagram(string) {
    let arr = []
    arr = string.split('')
    for (let i = 0; i < string.length; i++) {
        
    }
}

function permut(string) {
    if (string.length < 2) return string // This is our break condition
  
    let permutations = []

    for (let i = 0; i < string.length; i++) {
      // Cause we don't want any duplicates:
    //   if (string.indexOf(string[i]) != i) // if char was used already
    //     continue; // skip it this time
  
      let remainingString = string.slice(0, i) + string.slice(i + 1, string.length)
      //Note: you can concat Strings via '+' in JS
  
      for (let subPermutation of permut(remainingString))
        permutations.push(string[i] + subPermutation)
    }

    return permutations;
  }

  console.log(permut('abc'))