const homes = [
  { title: "Apartment in Pune City", price: "₹6,900 for 2 nights", rating: "⭐ 4.89", badge: "Guest favourite", img: "images/home1.jpg" },
  { title: "Flat in Pune City", price: "₹4,273 for 2 nights", rating: "⭐ 5.0", badge: "<br>", img: "images/flat.jpg" },
  { title: "Guest suite in Pune City", price: "₹4,565 for 2 nights", rating: "⭐ 4.8", badge: "Guest favourite <br> <br>", img: "images/home3.jpg" },
  { title: "Room in Pune City", price: "₹2,926 for 2 nights", rating: "⭐ 4.88", badge: "Guest favourite", img: "images/home4.jpg" },
{ title: "Luxury Villa in Pune", price: "₹9,800 for 2 nights", rating: "⭐ 5.0", badge: "Guest favourite", img: "images/home5.jpg" },
{ title: "Studio Apartment", price: "₹3,500 for 2 nights", rating: "⭐ 4.7", badge: "Guest favourite", img: "images/home6.jpg" },
{ title: "Modern Flat in City Center", price: "₹5,400 for 2 nights", rating: "⭐ 4.95", badge: "Guest favourite", img: "images/home7.jpg" },
];

const goaHomes = [
  { title: "Beachside Villa in North Goa", price: "₹12,500 for 2 nights", rating: "⭐ 4.95", badge:<br></br>, img: "images/goa1.jpg" },
  { title: "Cottage near Anjuna Beach", price: "₹7,800 for 2 nights", rating: "⭐ 4.9", badge: "Guest favourite", img: "images/goa2.jpg" },
  { title: "Luxury Apartment in Calangute", price: "₹9,200 for 2 nights", rating: "⭐ 4.85", badge: "Guest favourite", img: "images/goa3.jpg" },
  { title: "Private Room in Candolim", price: "₹4,500 for 2 nights", rating: "⭐ 4.7", badge: "Guest favourite", img: "images/goa4.jpg" }
  
];


function renderCards(homesArray, containerId) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < homesArray.length; i++) {
    const home = homesArray[i];
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
}

renderCards(homes, "homes-container");
renderCards(goaHomes, "goa-container");
