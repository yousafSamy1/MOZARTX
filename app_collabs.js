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

const collabs = [
    {
        title: "Rich - ريتش _ MozartX",
        thumbnail: "./Images/newwwwwwwwwwwww.jpeg",
        url: "https://youtu.be/oi7V3eIUibg?si=6vecKowLcMIpNtvF",
        featured: true
    },
    {
        title: "Gaya Gaya _ Mozartx (Dj ELBOB)",
        thumbnail: "./Images/gay.jpg",
        url: "https://youtu.be/E8VUBH0CnO0?si=NF0CMGDTx0c02jBx",
        featured: false
    },
    {
        title: "Mohaymen - Liyam ft Mozartx",
        thumbnail: "./Images/Mohaymen - Liyam ft Mozartx.png",
        url: "https://youtu.be/IR66BPIPhJA?si=1kWrI-GIxQ_LmEsr",
        featured: false
    }
];

const grid = document.getElementById("collabs-grid");

collabs.forEach(track => {
    const card = document.createElement("div");
    card.className = `track-card ${track.featured ? "featured" : ""}`;
    card.innerHTML = `
    <img src="${track.thumbnail}">
    <div class="track-info">
      <h2>${track.title}</h2>
    </div>
  `;
    card.addEventListener("click", () => window.open(track.url, "_blank"));
    grid.appendChild(card);
});
