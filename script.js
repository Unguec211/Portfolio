// ==========================
// NAVIGATION SCROLL
// ==========================
document.getElementById("homeLink").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("aboutLink").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("menuLink").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactLink").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
});


// ==========================
// BUTTON ACTIONS
// ==========================

// Book Now
document.getElementById("bookBtn").addEventListener("click", function() {
    alert("Redirecting to reservation section...");
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
});

// Order Now
document.getElementById("orderBtn").addEventListener("click", function() {
    alert("Check out our popular dishes!");
    document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

// View Menu
document.getElementById("viewMenuBtn").addEventListener("click", function() {
    document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});


// ==========================
// ADD TO CART FUNCTIONALITY
// ==========================
let cart = [];

document.querySelectorAll(".addToCartBtn").forEach((button, index) => {
    button.addEventListener("click", function() {
        let card = button.closest(".card");
        let itemName = card.querySelector("h3").innerText;
        let price = card.querySelector(".price").innerText;

        cart.push({ itemName, price });

        alert(itemName + " added to cart 🛒");
        console.log(cart);
    });
});


// ==========================
// FORM SUBMISSION
// ==========================
document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Table reserved successfully! 🍽️");

    this.reset();
});


// ==========================
// SIMPLE HOVER EFFECT (JS BONUS)
// ==========================
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});