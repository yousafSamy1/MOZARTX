// Meteor Animation Logic
const canvas = document.getElementById("meteor-canvas");
const ctx = canvas.getContext("2d");

let meteors = [];

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Meteor {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width * 1.5;
    this.y = -100;
    this.size = Math.random() * 2 + 1;
    this.speed = Math.random() * 5 + 5;
    this.length = Math.random() * 100 + 50;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? "#00d4ff" : "#f0f8ff";
  }

  update() {
    this.x -= this.speed;
    this.y += this.speed;

    if (this.y > canvas.height || this.x < -100) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
    ctx.globalAlpha = this.opacity;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.length * 0.5, this.y - this.length * 0.5);
    ctx.stroke();

    // Glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.restore();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Background subtle gradient
  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, canvas.width
  );
  gradient.addColorStop(0, "rgba(20, 35, 60, 0.5)");
  gradient.addColorStop(1, "rgba(5, 10, 26, 0.7)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  meteors.forEach(m => {
    m.update();
    m.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", initCanvas);
initCanvas();

for (let i = 0; i < 15; i++) {
  meteors.push(new Meteor());
}
animate();

// Existing track data and logic
const tracks = [
  {
    title: "Mozart-Mhkama",
    thumbnail: "./Images/NEW_TRACK.jpeg",
    url: "https://youtu.be/jPUjcwI0FA0?si=cxLCxm-QAl2jRyx3",
    featured: true
  },
  {
    title: "MOZARTX - ANA MZAML4",
    thumbnail: "./Images/newww.jpeg",
    url: "https://youtu.be/FLGFTK3OW54?si=llxcZL3rJwoYnswo",
    featured: false
  },

  {
    title: "MOZARTX-Bkrahom",
    thumbnail: "./Images/bkrahm.jpeg",
    url: "https://youtu.be/EmyFpPPNI0U?si=Fqzby56zY219SXNd",
    featured: false
  },




  {
    title: "MOZARTX-Lucifer",
    thumbnail: "./Images/Lucifer.jpeg",
    url: "https://youtu.be/nSYhkRx7Cx4?si=BGqQH9AD5Tpz7Rfv",
    featured: false
  },

  {
    title: "MOZARTx-Dwa5ony",
    thumbnail: "./Images/dwa5ony.jpg",
    url: "https://youtu.be/JVPK6M2Itbs?si=3IL_3CMNrrROhPhr",
    featured: false
  },

  {
    title: "MOZARTx-Yalel",
    thumbnail: "./Images/dwa5ony.jpg",
        thumbnail: "./Images/2.png",
    url: "https://youtu.be/Ibz52gY1T-E?si=AH84fGbmQEVOXifm",
    featured: false
  },


  {
    title: "MOZARTX - El3eb",
    thumbnail: "./Images/El3eb.png",
    url: "https://youtu.be/HSnULQCkA14?si=NEduAESpd1uP4Txz",
    featured: false
  },
  {
    title: "MOZARTX - Depression",
    thumbnail: "./Images/depression_4.png",
    url: "https://youtu.be/m7wWQM5IPXM?si=_xppna95BExGa_t4",
    featured: false
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
I’m a rapper and music producer from Tanta, and I’m 22 years old.
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

