function getNumbers() {
    return Promise.resolve([1, 2, 3, 4]);
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        document.getElementById("output").innerText = evenNumbers.join(', ');
        resolve(evenNumbers);
    });
}

function multiplyNumbers(numbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = numbers.map(num => num * 2);
        document.getElementById("output").innerText = multipliedNumbers.join(', ');
        resolve(multipliedNumbers);
    });
}

getNumbers()
    .then(numbers => filterEvenNumbers(numbers))
    .then(evenNumbers => multiplyNumbers(evenNumbers))
    .catch(error => {
        console.error("An error occurred:", error);
    });