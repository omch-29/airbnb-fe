const homes = [
  { title: "Apartment in Pune City", price: "₹6,900 for 2 nights", rating: "⭐ 4.89", badge: "Guest favourite", img: "images/home1.jpg" },
  { title: "Flat in Pune City", price: "₹4,273 for 2 nights", rating: "⭐ 5.0", badge: "<br>", img: "images/flat.jpg" },
  { title: "Guest suite in Pune City", price: "₹4,565 for 2 nights", rating: "⭐ 4.8", badge: "Guest favourite <br> <br>", img: "images/home3.jpg" },
  
];

const container = document.getElementById("homes-container");

for (let i = 0; i < homes.length; i++) {
  const home = homes[i];
  container.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${home.img}" class="card-img-top" alt="${home.title}">
        <div class="card-body">
          <span class="badge bg-light text-dark mb-2">${home.badge}</span>
          <h6>${home.title}</h6>
          <p class="mb-1">${home.price} · ${home.rating}</p>
        </div>
      </div>
    </div>
  `;
}
