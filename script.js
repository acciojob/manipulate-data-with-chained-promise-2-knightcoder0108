function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 0); // Immediate resolve to start the chaining
    });
}

manipulateArray()
    .then((numbers) => {
        // First step: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter((num) => num % 2 === 0);
                document.getElementById('output').textContent = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000); // Wait 1 second before resolving with even numbers
        });
    })
    .then((evenNumbers) => {
        // Second step: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map((num) => num * 2);
                document.getElementById('output').textContent = multipliedNumbers.join(', ');
                resolve(multipliedNumbers);
            }, 2000); // Wait 2 seconds before resolving with multiplied numbers
        });
    })
    .catch((error) => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
