const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Function to sum the elements of a single row
function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        const rowSum = row.reduce((acc, num) => acc + num, 0);
        resolve(rowSum);
    });
}

// Use Promise.all to sum each row concurrently
function sum2DArray2(arr: number[][]): Promise<number> {
    // Map each row to a promise that sums the row
    const rowPromises = arr.map(row => sumRow(row));
    
    // Use Promise.all to wait for all row sums to resolve
    return Promise.all(rowPromises)
        .then(rowSums => {
            // Sum the results of all rows to get the total sum
            return rowSums.reduce((acc, sum) => acc + sum, 0);
        });
}

// Example usage
sum2DArray(array2D_1)
    .then(totalSum => {
        console.log('Total sum of 2D array:', totalSum);
    })
    .catch(error => {
        console.error('Error while summing 2D array:', error);
    });
