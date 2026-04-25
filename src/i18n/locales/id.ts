export default {
  link: {
    project: "/proyek",
    cv: "/unduh-cv",
  },
  navbar: {
    home: "Ke Beranda",
  },
  home: {
    title: "Beranda",
    greeting: {
      1: "Halo, disana!",
      2: "Saya Danendra Eganatha Syahsamaauren",
      3: "Panggil saja Ega",
    },
    summary: {
      title: "Ringkasan",
      content:
        "Pengembang Backend, Frontend, dan Mobile. Secara idealis saya fokus pada kualitas dibanding kuantitas (walaupun membutuhkan waktu...). Saya suka Open Source, kode, dan dokumentasi yang rapi dan bagus. ",
    },
    social: {
      title: "Sosial",
    },
    skill: {
      title: "Keterampilan",
      tool: {
        title: "Alat",
        items: ["Linux", "Bash/Fish", "LaTeX", "Typst", "git", "vim"]
      },
      programming: {
        title: "Pemrograman",
        items: ["Go", "Kotlin", "Javascript", "HTML", "CSS"]
      },
      framework: {
        title: "Framework",
        items: ["Go Fiber", "Vite/Vue.js"]
      },
      language: {
        title: "Bahasa",
        items: ["Indonesia (Utama)", "English"]
      }
    },
    contact: {
      title: "Kontak",
      email: {
        title: "Surel:",
      },
    },
  },
  project: {
    title: "Proyek-proyek",
    desc: "Klik gambar untuk zum...",
    more: {
      title: "Proyek lainnya...",
      content: "Pergi ke profil github-ku untuk melihat proyek-proyek lain milikku"
    },
    "port-1": {
      title: "port-1",
      image: "/images/port-1.webp",
      content: "Sebuah laman web portfolio sederhana dan sekaligus aneh. Dibuat menggunakan Vite/Vue.js dan beberapa komponen seperti vue-i18n untuk internasionalisasi dan pelokalan (i18n). Dan juga menggunakan TailwindCSS untuk mempermudah deklarasi gaya. (Typescript, Vite, Vue.js)",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "Situs",
      },
    },
    fundivest: {
      title: "fundivest",
      image: "/images/fundivest.webp",
      content:
        "Sebuah situs tentang gamifikasi \"finansial\". Proyek ini dibuat untuk kompetisi Fictpact yang diadakan oleh Unika. Saya membuat infrastruktur backend untuk proyek ini. Dibangun menggunakan Go Fiber, PostgreSQL, Valkey, MinIO, and Gotenberg. Catatan: Situs kemungkinan tidak bekerja sempurna, dikarenakan saya mematikan backend-nya",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "Situs",
      },
    },
    Biblio: {
      title: "Biblio",
      image: "/images/biblio.webp",
      content: "Sebuah aplikasi bertemakan perpustakaan. Dibangun menggunakan pustaka Android Jetpack Compose. Bilah bawah terinspirasi oleh \"Now Playing\" milik Spotify. *Hampir semuanya dalam Kotlin.",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "",
      },
    },
    jalurku: {
      title: "jalurku",
      image: "/images/jalurku.webp",
      content: "Sebuah situs tentang mengkurasi semua minat Anda menjadi satu jurusan sekolah. Proyek ini dibuat untuk Jagoan Hosting_ Infra Competition. Backend-nya dibangun menggunakan Go Fiber, PostgreSQL, dan Redis.",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "",
      },
    },   
    Smilebox: {
      title: "Smilebox",
      image: "/images/smilebox.webp",
      content: "Sebuah situs tentang doktor gigi. Dibuat menggunakan HTML, CSS, dan Javascript. Situs ini membuatku juara #1 pada kompetisi UNIPRO Stage X yang diadakan oleh Unikama.",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "Situs",
      },
    },
    Eatscape: {
      title: "Eatscape",
      image: "/images/eatscape.webp",
      content: "Sebuah situs tentang makanan. Dengan mengetahuinya. Situs ini untuk kompetisi INVENTION yang diadakan oleh Udayana.",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "Situs",
      },
    },
    Phostel: {
      title: "Phostel",
      image: "/images/phostel.webp",
      content: "Sebuah situs dinamis pertamaku tentang foto. Sebuah repositori gambar. Dibangun menggunakan Flask, SQLite, dan konten yang disimpan secara lokal. Catatan: Di tangkapan layarnya, semua foto diambil oleh saya.",
      link1: {
        name: "Repositori",
      },
      link2: {
        name: "",
      },
    },
  },
  404: {
    title: "404",
    1: "Boo! Tidak ada apa-apa disini!",
    2: "Pergi ke tempat lain sana!",
  },
};
