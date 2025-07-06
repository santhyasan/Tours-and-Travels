const tourData = [
  {
    title: "5-Day Greece Island Hopping",
    price: 1200,
    days: 5,
    type: "honeymoon",
    image:"assects/island.jpeg"
    },
  {
    title: "3-Day Adventure in Swiss Alps",
    price: 950,
    days: 3,
    type: "adventure",
    image: "assects/adventure.jpg"
  },
  {
    title: "7-Day Family Tour of London",
    price: 1800,
    days: 7,
    type: "family",
    image: "assects/London-Eye.webp"
  },
  {
    title: "Romantic Paris Getaway",
    price: 1350,
    days: 4,
    type: "honeymoon",
    image: "assects/paris.jpg"
  },
  {
    title: "6-Day Bali Island Explorer",
    price: 1100,
    days: 6,
    type: "adventure",
    image: "assects/bali.png"
  },
  {
    title: "4-Day Dubai Desert Safari",
    price: 1000,
    days: 4,
    type: "family",
    image: "assects/dubai desert.jpg"
  }
];

function renderResults(data) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous
  data.forEach(tour => {
    resultsContainer.innerHTML += `
      <div class="card">
        <img src="${tour.image}" alt="${tour.title}">
        <div class="card-content">
          <h3>${tour.title}</h3>
          <p>${tour.days} days • ${tour.type.charAt(0).toUpperCase() + tour.type.slice(1)}</p>
          <p class="price">$${tour.price}</p>
          <button onclick="openModal('${tour.title}')">Book Now</button>
        </div>
      </div>
    `;
  });
}

function applyFilters() {
  const price = document.getElementById("priceRange").value;
  const duration = document.getElementById("duration").value;
  const type = document.getElementById("type").value;

  let filtered = tourData.filter(tour => {
    return (
      (!price || tour.price <= price) &&
      (!duration || tour.days <= parseInt(duration)) &&
      (!type || tour.type === type)
    );
  });

  renderResults(filtered);
}

window.onload = () => {
  renderResults(tourData);
};

function openModal(tourName) {
  document.getElementById("modalTourTitle").textContent = `Book: ${tourName}`;
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    closeModal();

    const popup = document.getElementById("successPopup");
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);

    form.reset();
  });
});

