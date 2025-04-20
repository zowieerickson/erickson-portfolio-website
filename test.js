console.log('hi')

function test(i) {
    if (i > 3) {
        return console.log(i, "bleep")
    }

    console.log(i)
    test(i + 1)
    console.log(`End of call where i = ${i}`)
    return
}

test(1)