const words = ["Kebenaran terbenarkan", "Memang Indie", "Buruk itu bagus"];
const shell = [">", "$", "]", "_", "%", "#"];

// Function to get a random word
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function getRandomShell() {
    const randomIndex = Math.floor(Math.random() * shell.length);
    return shell[randomIndex]
}

// Display the random word
document.getElementById('greetings').textContent = getRandomWord();
document.getElementById('shell').textContent = getRandomShell();