// Maps
var map = L.map('map').setView([-7.435167, 109.250249], 9);

var myIcon = L.icon({
    iconUrl: '../assets/images/logo.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [-3, -76],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-7.435167, 109.250249],{icon:myIcon}).addTo(map);

const words = ["in·\u200Bkon·\u200Bven·\u200Bsi·\u200Bo·\u200Bnal", "Memang·\u200BIndie", "Buruk itu bagus"];
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

// Asciinema
const lavaPath = `${basePath}assets/misc/lavat-id.cast`;
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