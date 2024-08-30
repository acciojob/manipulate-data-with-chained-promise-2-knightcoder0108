function getNumbers() {
    return Promise.resolve([1, 2, 3, 4]);
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById("output").innerText = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 500); // Add a small delay
    });
}

function multiplyNumbers(numbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = numbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById("output").innerText = multipliedNumbers.join(', ');
            resolve(multipliedNumbers);
        }, 1500); // Add a small delay
    });
}

getNumbers()
    .then(numbers => filterEvenNumbers(numbers))
    .then(evenNumbers => multiplyNumbers(evenNumbers))
    .catch(error => {
        console.error("An error occurred:", error);
    });