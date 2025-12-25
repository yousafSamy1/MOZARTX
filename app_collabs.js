const collabs = [
      {
        title: "Gaya Gaya _ Mozartx (Dj ELBOB)",
        thumbnail: "./Images/gay.jpg",
        url: "https://youtu.be/E8VUBH0CnO0?si=NF0CMGDTx0c02jBx",
        featured: true
    },
    {
        title: "Mohaymen - Liyam ft Mozartx",
        thumbnail: "./Images/Mohaymen - Liyam ft Mozartx.png",
        url: "https://youtu.be/IR66BPIPhJA?si=1kWrI-GIxQ_LmEsr",
        featured: false
    },

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
