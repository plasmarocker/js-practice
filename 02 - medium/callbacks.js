// DO NOT MODIFY THIS FUNCTION
function doLotsOfSquaring(squaringCallback) {
    for (let i = 0; i < 100; i++) {
        const result = squaringCallback(i);
        if (result === i * i) {
            console.log('right!');
        } else {
            console.log('wrong!');
        }
    }
}

// BELOW this line, write the call to doLotsOfSquaring so that you see 'right!' on your console 100 times
// your logic should be a function that simply takes a number, multiplies it by itself, and returns the result
