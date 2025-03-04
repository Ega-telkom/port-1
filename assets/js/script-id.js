const basePath = window.location.pathname.startsWith('/port-1/') ? '/port-1/' : '/';
var path = window.location.pathname;

// Maps
var map = L.map('map').setView([-7.435167, 109.250249], 9);

var myIcon = L.icon({
    iconUrl: `${basePath}assets/images/logo.webp`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [-3, -76],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-7.435167, 109.250249],{icon:myIcon}).addTo(map);

if (path.endsWith("/")) {
    path += "index.html";
}

if (path.endsWith("index.html")) {

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

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let formData = new FormData(this);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSf6TsctTiQrhKr7o043QziHCxvcOZXJODe6fYilOSn4f0BsYQ/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            alert("Formulir terkirim, terima kasih :D!");
        }).catch(() => {
            alert("Ngirim formulir kok bisa gagal si, ulangi sana.");
        });
    });
}
