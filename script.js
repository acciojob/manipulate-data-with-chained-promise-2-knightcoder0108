//your JS code here. If required.
function manipulateArray() {
    // Initial array
    const numbers = [1, 2, 3, 4];

    // Return a promise that resolves with the array after 3 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(numbers);
        }, 3000);
    });
}

// Start the promise chain
manipulateArray()
    .then(numbers => {
        // First promise: filter out odd numbers
        return new Promise(resolve => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            setTimeout(() => {
                // Update output after filtering
                document.getElementById('output').textContent = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Second promise: multiply even numbers by 2
        return new Promise(resolve => {
            const multipliedNumbers = evenNumbers.map(num => num * 2);
            setTimeout(() => {
                // Update output after multiplying
                document.getElementById('output').textContent = multipliedNumbers.join(', ');
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
