const toggle = document.getElementById("mobile-toggle");
const nav = document.getElementById("main-nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// -------------------
// Cart System
// -------------------
let cart = [];

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);

        cart.push({ name, price });
        showCartNotification(name);
    }
});

// -------------------
// Cart Modal
// -------------------
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

cartButton.addEventListener("click", () => {
    renderCart();
    cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => {
    cartModal.classList.add("hidden");
});

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// -------------------
// Cart Notification
// -------------------
function showCartNotification(name) {
    const notification = document.createElement("div");
    notification.textContent = `${name} added to cart!`;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "#ff6f61";
    notification.style.color = "#fff";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "8px";
    notification.style.boxShadow = "0 4px 8px rgba(0,0,0,0.5)";
    notification.style.zIndex = "3000";
    notification.style.fontWeight = "bold";
    notification.style.opacity = "1";
    notification.style.transition = "opacity 0.8s ease";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
        }, 800);
    }, 1500);
}