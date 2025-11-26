const collabs = [
    {
        title: "Mohaymen - Liyam ft Mozartx",
        thumbnail: "./Images/Mohaymen - Liyam ft Mozartx.png",
        url: "https://youtu.be/IR66BPIPhJA?si=1kWrI-GIxQ_LmEsr",
        featured: true
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
