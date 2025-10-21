const tracks = [
  {
    title: "MOZARTX - Depression",
    thumbnail: "./Images/depression_4.png",
    url: "https://youtu.be/m7wWQM5IPXM?si=_xppna95BExGa_t4",
    featured: true
  },
  {
    title: "MOZARTX SHEIN",
    thumbnail: "./Images/SHEIN.png",
    url: "https://youtu.be/Eejmzc-qBgI?si=uhELz4LS-lw1CCnV"
  },
  {
    title: "MOZARTX - MHBONA4",
    thumbnail: "./Images/MAHBONA4.png",
    url: "https://youtu.be/VhNygmip4IM?si=nXIoG5KaE0AKRkU1"
  },
  {
    title: "MOZARTX - BDMENHA",
    thumbnail: "./Images/BDMENHA.jpg",
    url: "https://youtu.be/hgo0P_49-0A?si=eDSULax5yBLUfnJU"
  },
  {
    title: "MOZARTX - SHPY",
    thumbnail: "./Images/S.jpg",
    url: "https://youtu.be/29QHgkJh5WE?si=uWLpI4AxyY8FD-YM"
  },
  {
    title: "MOZARTX - KIKI",
    thumbnail: "./Images/K.jpg",
    url: "https://youtu.be/MrIxGvphlvw?si=u4NVx4BXf-7ITpga"
  },
  {
    title: "MOZARTX - ACTION",
    thumbnail: "./Images/A.jpg",
    url: "https://youtu.be/V8dVjIxVOfM?si=cyUwCDtM2J9-ONZ6"
  },
  {
    title: "MOZARTX - X 7D HENA",
    thumbnail: "./Images/X.jpg",
    url: "https://youtu.be/srerAn7MMo4?si=5-XmJOi07SVqX3Zp"
  },
  {
    title: "Haly Halk - MOZARTX",
    thumbnail: "./Images/7.jpg",
    url: "https://youtu.be/Y5eOMsopdsQ?si=we_K7DwqHTOLRtUs"
  }
];

const trackGrid = document.getElementById("track-grid");

tracks.forEach(track => {
  const card = document.createElement("div");
  card.className = `track-card ${track.featured ? "featured" : ""}`;
  card.innerHTML = `
    <img src="${track.thumbnail}" alt="${track.title}">
    <div class="track-info">
      <h2>${track.title}</h2>
    </div>
  `;
  card.addEventListener("click", () => window.open(track.url, "_blank"));
  trackGrid.appendChild(card);
});

// كتابة تلقائية للنص في الـ About section
const aboutText = `
I’m a rapper and music producer from Tanta, currently based in Giza, and I’m 22 years old.
I’ve been making tracks since 2019, blending pop, rap, R&B, and EDM with my own unique sound and real vibe.
My track “Haly Halak” reached over 50K streams, and this is just the beginning.
`;

const aboutElement = document.getElementById("about-dynamic");
let i = 0;

function typeWriter() {
  if (i < aboutText.length) {
    aboutElement.innerHTML += aboutText.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  }
}

window.addEventListener("scroll", () => {
  const rect = aboutElement.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && i === 0) {
    typeWriter();
  }
});

