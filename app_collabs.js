const collabs = [
    {
        title: "Rich - ريتش _ MozartX",
        thumbnail: "./Images/newwwwwwwwwwwww.jpeg",
        url: "https://youtu.be/oi7V3eIUibg?si=6vecKowLcMIpNtvF",
        featured: true
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
