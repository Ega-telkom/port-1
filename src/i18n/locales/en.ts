export default {
  link: {
    project: "/project",
    cv: "/download-cv",
  },
  navbar: {
    home: "Go Home",
  },
  home: {
    title: "Home",
    desc: "Ega's portfolio homepage",
    url: "https://port-1.greneboy.com/",
    greeting: {
      1: "Hello, there!",
      2: "I'm Danendra Eganatha Syahsamaauren",
      3: "Just call me Ega",
    },
    summary: {
      title: "Summary",
      content:
        "Backend, Frontend, and Mobile developer. Ideally I focus on quality rather than quantity (even though it takes time.…). I like Open Source, good/clean code, and good documentation. ",
    },
    social: {
      title: "Socials",
    },
    skill: {
      title: "Skills",
      tool: {
        title: "Tools",
        items: ["Linux", "Bash/Fish", "LaTeX", "Typst", "git", "vim"],
      },
      programming: {
        title: "Programming",
        items: ["Go", "Kotlin", "Javascript", "HTML", "CSS"],
      },
      framework: {
        title: "Framework",
        items: ["Go Fiber", "Vite/Vue.js"],
      },
      language: {
        title: "Language",
        items: ["Indonesia (Native)", "English"],
      },
    },
    contact: {
      title: "Contact",
      email: {
        title: "Email:",
        content: "ega8642 [at] gmail [dot] com",
      },
    },
  },
  project: {
    title: "Projects",
    desc: "Ega's project collections",
    url: "https://port-1.greneboy.com/project/",
    more: {
      title: "More projects...",
      content: "Go to my github profile to see my other projects!"
    },
    "port-1": {
      title: "port-1",
      image: "/images/port-1.webp",
      imageWidth: "1706",
      imageHeight: "1400",
      content:
        "A simple yet quite wierd portfolio website. Made using Vite/Vue.js and a few components like vue-i18n for internationalization and localization (i18n). Also uses TailwindCSS to ease the styling declaration. (Typescript, Vite, Vue.js)",
      link1: {
        name: "Repository",
        url: "https://github.com/Ega-telkom/port-1",
      },
      link2: {
        name: "Site",
        url: "https://port-1.greneboy.com",
      },
    },
    fundivest: {
      title: "fundivest",
      image: "/images/fundivest.webp",
      imageWidth: "1920",
      imageHeight: "4375",
      content:
        "A site all about \"financial\" stuff but in a game sense. This project is for Fictpact competition held by Unika. I made the backend infrastructure for the project. Built using Go Fiber, PostgreSQL, Valkey, MinIO, and Gotenberg. (Site probably don't work as intended, as I take down the backend.)",
      link1: {
        name: "Repository",
        url: "https://github.com/Ega-telkom/fundivest-backend",
      },
      link2: {
        name: "Site",
        url: "https://www.fundivest.xyz",
      },
    },
    Biblio: {
      title: "Biblio",
      image: "/images/biblio.webp",
      imageWidth: "2832",
      imageHeight: "1142",
      content:
        "A library themed app. Built using native Android's Jetpack Compose. The bottom bar is inspired by Spotify's \"Now Playing\". *Almost Everything is in Kotlin.",
      link1: {
        name: "Repository",
        url: "https://github.com/adzkya-fajri/Biblio",
      },
      link2: {
        name: "",
        url: "",
      },
    },
    jalurku: {
      title: "jalurku",
      image: "/images/jalurku.webp",
      imageWidth: "1920",
      imageHeight: "5242",
      content:
        "A site all about curating all of your interests into one school major you can decide later on. This project is for Jagoan Hosting_ Infra Competition. The backend is built using Go Fiber, PostgreSQL, and Redis.",
      link1: {
        name: "Repository",
        url: "https://github.com/Ayam-Kampung/jalurku",
      },
      link2: {
        name: "",
        url: "",
      },
    },
    Smilebox: {
      title: "Smilebox",
      image: "/images/smilebox.webp",
      imageWidth: "1920",
      imageHeight: "9966",
      content: "A site about dental. Made using simple HTML, CSS, and Javascript. This site lead me in achieving #1 position in UNIPRO Stage X competition held by Unikama",
      link1: {
        name: "Repository",
        url: "https://github.com/Ega-telkom/smilebox",
      },
      link2: {
        name: "Site",
        url: "https://ega-telkom.github.io/smilebox",
      },
    },
    Eatscape: {
      title: "Eatscape",
      image: "/images/eatscape.webp",
      imageWidth: "1920",
      imageHeight: "3978",
      content: "A site about food. Specifically by knowing them. This is for INVENTION competiton held by Udayana.",
      link1: {
        name: "Repository",
        url: "https://github.com/Ega-telkom/eatscape",
      },
      link2: {
        name: "Site",
        url: "https://ega-telkom.github.io/eatscape",
      },
    },
    Phostel: {
      title: "Phostel",
      image: "/images/phostel.webp",
      imageWidth: "1920",
      imageHeight: "2072",
      content: "My first dynamic site about pictures. It's an image repository. Built using Flask, SQLite, and locally stored contents. Note: In the screenshoot, the pictures is all taken by me.",
      link1: {
        name: "Repository",
        url: "https://github.com/Ega-telkom/phostel",
      },
      link2: {
        name: "",
        url: "",
      },
    },
  },
  404: {
    title: "404",
    desc: "404 Not found",
    1: "Boo! There's nothing here!",
    2: "Go somewhere else!",
  },
};
