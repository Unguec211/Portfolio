// Select elements
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

let total = 0;

// Add to cart
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseInt(button.getAttribute("data-price"));

        // Create list item
        const li = document.createElement("li");
        li.textContent = `${name} - ${price} UGX`;
        cartItems.appendChild(li);

        // Update total
        total += price;
        totalPrice.textContent = total;
    });
});

// Book Now button
document.getElementById("bookBtn").addEventListener("click", () => {
    alert("Table booking coming soon!");
});

// Order Now button
document.getElementById("orderBtn").addEventListener("click", () => {
    alert("Ordering feature coming soon!");
});

// View Menu scroll
document.getElementById("viewMenuBtn").addEventListener("click", () => {
    document.querySelector(".menu").scrollIntoView({
        behavior: "smooth"
    });
});