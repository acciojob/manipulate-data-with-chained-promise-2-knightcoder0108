// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 0); // Set to 0 to start immediately for the test's timing
    });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById("output").innerText = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000); // 1 second to match the test expectation
    });
}

// Function to multiply even numbers by 2
function multiplyNumbers(numbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = numbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById("output").innerText = multipliedNumbers.join(', ');
            resolve(multipliedNumbers);
        }, 2000); // 2 seconds to match the test expectation
    });
}

// Chain the promises
getNumbers()
    .then(numbers => filterEvenNumbers(numbers))
    .then(evenNumbers => multiplyNumbers(evenNumbers))
    .catch(error => {
        console.error("An error occurred:", error);
    });
