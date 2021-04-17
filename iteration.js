'DSA Iteration'

'1. Counting Sheep'

function countingSheep(num) {
    for (let i = num; i > 0; i--) {
        console.log(`${i} sheep jumped over the fence...`)
    }
    return console.log('All the sheep jumped over the fence')
}

countingSheep(3)