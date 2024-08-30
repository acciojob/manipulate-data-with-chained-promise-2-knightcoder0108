function getNumbers() {
    return Promise.resolve([1, 2, 3, 4]);
}

function filterEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    document.getElementById("output").innerText = evenNumbers.join(', ');
    return Promise.resolve(evenNumbers);
}

function multiplyNumbers(numbers) {
    const multipliedNumbers = numbers.map(num => num * 2);
    document.getElementById("output").innerText = multipliedNumbers.join(', ');
    return Promise.resolve(multipliedNumbers);
}

getNumbers()
    .then(numbers => filterEvenNumbers(numbers))
    .then(evenNumbers => multiplyNumbers(evenNumbers))
    .catch(error => {
        console.error("An error occurred:", error);
    });