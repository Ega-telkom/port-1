const words = ["Corrected Correctness", "Indie Indeed", "Worse is better"];
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

const basePath = window.location.pathname.startsWith('/port-1/') ? '/port-1/' : '/';

document.fonts.load("1em IBM Plex Mono").then(() => {
    AsciinemaPlayer.create(`${basePath}assets/misc/lavat.cast`, document.getElementById('lava'), {
      terminalFontFamily: "'IBM Plex Mono', monospace",
      loop: true,
      autoPlay: true,
      controls: false,
      fit: false,
    });
  })
  
