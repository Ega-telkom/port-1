const words = ["un·\u200Bcon·\u200Bven\u200Btion·\u200Bal", "Indie·\u200BIndeed", "Worse is better"];
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

//Asciinema
const basePath = window.location.pathname.startsWith('/port-1/') ? '/port-1/' : '/';
const lavaPath = `${basePath}assets/misc/lavat.cast`;
const lavaSkel = document.getElementById('lava-skeleton');
const lava = document.getElementById('lava');

lava.style.display = 'none';

const player = AsciinemaPlayer.create(lavaPath, lava, {
  terminalFontFamily: "'IBM Plex Mono', monospace",
  loop: true,
  autoPlay: true,
  controls: false,
  fit: false,
});

player.addEventListener('playing', () => {
  lavaSkel.remove();
  lava.style.display = 'block';
});