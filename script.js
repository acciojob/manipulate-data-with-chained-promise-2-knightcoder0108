function manipulateArray() {
    const numbers = [1, 2, 3, 4];

    // Promise to resolve with the array after 1 second
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(numbers);
        }, 1000);
    });
}

manipulateArray()
    .then(numbers => {
        // Filter out odd numbers and update the output div after 1 second
        return new Promise(resolve => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                document.getElementById('output').textContent = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Multiply even numbers by 2 and update the output div after 2 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').textContent = multipliedNumbers.join(', ');
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch(error => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
