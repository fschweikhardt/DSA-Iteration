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
    arr = string.split('').reverse().join('')
    return arr
    //return 
}

//console.log(reverseArray(string3))