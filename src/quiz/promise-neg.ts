const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// Function to check if a row contains at least one negative number
function containsNegative(row: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        const hasNegative = row.some(num => num < 0);
        if (hasNegative) {
            resolve(row);  // Resolve the promise if the row contains a negative number
        } else {
            reject('No negative numbers in this row');
        }
    });
}

// Use Promise.any to log the first row that has a negative number
Promise.any(array2D_3.map(row => containsNegative(row)))
    .then(rowWithNegative => {
        console.log('Row with a negative number:', rowWithNegative);
    })
    .catch(() => {
        console.error('No rows contain a negative number');
    });
