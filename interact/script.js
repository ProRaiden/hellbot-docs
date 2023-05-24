function processInput() {
    const userInput = document.getElementById('input').value;
    const outputElement = document.getElementById('output');
    // Process the input
    const processedInput = userInput.toUpperCase();
    // Display the output
    outputElement.textContent = 'https://dashboard.heroku.com/new?template=' + processedInput;
}
