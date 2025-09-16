const homes = [
  { title: "Apartment in Pune City", price: "₹6,900 for 2 nights", rating: "⭐ 4.89", badge: "Guest favourite", img: "images/home1.jpg" },
  { title: "Flat in Pune City", price: "₹4,273 for 2 nights", rating: "⭐ 5.0", badge: "<br>", img: "images/flat.jpg" },
  { title: "Guest suite in Pune City", price: "₹4,565 for 2 nights", rating: "⭐ 4.8", badge: "Guest favourite <br> <br>", img: "images/home3.jpg" },
  { title: "Room in Pune City", price: "₹2,926 for 2 nights", rating: "⭐ 4.88", badge: "<br>", img: "images/home4.jpg" },
{ title: "Luxury Villa in Pune", price: "₹9,800 for 2 nights", rating: "⭐ 5.0", badge: "Guest favourite", img: "images/home5.jpg" },
{ title: "Studio Apartment", price: "₹3,500 for 2 nights", rating: "⭐ 4.7", badge: "<br>", img: "images/home6.jpg" },
{ title: "Modern Flat in City Center", price: "₹5,400 for 2 nights", rating: "⭐ 4.95", badge: "Guest favourite", img: "images/home7.jpg" },
];

const goaHomes = [
  { title: "Beachside Villa in North Goa", price: "₹12,500 for 2 nights", rating: "⭐ 4.95", badge: "<br>", img: "images/goa1.jpg" },
  { title: "Cottage near Anjuna Beach", price: "₹7,800 for 2 nights", rating: "⭐ 4.9", badge: "Guest favourite", img: "images/goa2.jpg" },
  { title: "Luxury Apartment in Calangute", price: "₹9,200 for 2 nights", rating: "⭐ 4.85", badge: "<br>", img: "images/goa3.jpg" },
  { title: "Private Room in Candolim", price: "₹4,500 for 2 nights", rating: "⭐ 4.7", badge: "Guest favourite", img: "images/goa4.jpg" }
  
];
const thanehomes = [
  { title: "cabin in Nadhal", price: "₹15,520 for 2 nights", rating: "⭐ 4.75", badge: "<br>", img: "images/thome1.jpg" },
  { title: "Flat in Thane", price: "₹6,823 for 2 nights", rating: "⭐ 5.00", badge: "Guest favourite", img: "images/thome2.jpg" },
  { title: "Apartment in Thane", price: "₹4,106 for 2 nights", rating: "⭐ 4.98", badge: "Guest favourite", img: "images/thome3.jpg" },
  { title: "Apartment in Thane", price: "₹7,989 for 2 nights", rating: "⭐ 4.37", badge: "<br>", img: "images/thome4.jpg" },
];
const dubaihomes = [
  { title: "Flat in Downtime Dubai", price: "₹16,589 for 2 nights", rating: "⭐ 4.92", badge: "Guest favourite", img: "images/dhome1.jpg" },
  { title: "Flat in UAE", price: "₹8,362 for 2 nights", rating: "⭐ 4.38", badge: "<br>", img: "images/dhome2.jpg" },
  { title: "Guest suite in Dubai", price: "₹7,317 for 2 nights", rating: "⭐ 4.82", badge: "Guest favourite", img: "images/dhome3.jpg" },
  { title: "Flat in Al jafiliya", price: "₹9,471 for 2 nights", rating: "⭐ 4.73", badge: "<br>", img: "images/dhome4.jpg" },
];
const hdhomes = [
  { title: "Flat in Hydearabad", price: "₹9,449 for 2 nights", rating: "⭐ 4.93", badge: "<br>", img: "images/hhome1.jpg" },
  { title: "Room in Serilingampalle mandal", price: "₹3,893 for 2 nights", rating: "⭐ 4.89", badge: "Guest favourite", img: "images/hhome2.jpg" },
  { title: "Room in boutique hotel Hyderabad", price: "₹4,958 for 2 nights", rating: "⭐ 4.97", badge: "<br>", img: "images/hhome3.jpg" },
];
const bhomes = [
  { title: "Apartment in Bangalore Urban", price: "₹4,650 for 2 nights", rating: "⭐ 4.68", badge: "Guest favourite", img: "images/bhome1.jpg" },
  { title: "Apartment in Nagareshwara - Nagenahalli", price: "₹5,438 for 2 nights", rating: "⭐ 4.93", badge: "<br>", img: "images/bhome2.jpg" },
  { title: "Tiny home in Bangalore Urban", price: "₹5,250 for 2 nights", rating: "⭐ 4.98", badge: "Guest favourite", img: "images/bhome3.jpg" },
  { title: "Rental unit in Bangalore Urban", price: "₹5,706 for 2 nights", rating: "⭐ 4.92", badge: "Guest favourite", img: "images/bhome4.jpg" },
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
renderCards(thanehomes, "thane-container");
renderCards(dubaihomes, "dubai-container");
renderCards(hdhomes, "hd-container");
renderCards(bhomes, "bl-container");