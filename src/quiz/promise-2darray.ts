function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);
sumPromise1
    .then(result => {
        console.log('Result from sumPromise1:', result);
    })
    .catch(error => {
        console.error('Error from sumPromise1:', error);
    });

const sumPromise2 = sum2DArray([]);
sumPromise2
    .then(result => {
        console.log('Result from sumPromise2:', result);
    })
    .catch(error => {
        console.error('Error from sumPromise2:', error);
    });


    //Basically the Promise one initiates and is added to the queue, 
    //then it calls sun2DArray. 2DArray runs and adds all of the ints 
    //in the array. Promise then returns the result that is passed to 
    //it from sum2DArray. Sum promise 2 does not run becaus the type is 
    // not included. Sum2DArray(array2D) provides the type. It runs main
    //thread, then the promises, and then the timeouts. 