let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}



document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".btn");
    const cartContainer = document.querySelector(".cart-item-container");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Preventdefault link behavior

            // get item details
            const itemBox = button.closest(".box");
            const itemImage = itemBox.querySelector("img").src;
            const itemName = itemBox.querySelector("h3").textContent;
            const itemPrice = itemBox.querySelector(".price").childNodes[0].textContent.trim();

            // create cart item
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span class="fas fa-times remove-item"></span>
                <img src="${itemImage}" alt="">
                <div class="content">
                    <h3>${itemName}</h3>
                    <div class="price">${itemPrice}/-</div>
                </div>
            `;

            // Append to cart(add items to cart line by line)
            cartContainer.appendChild(cartItem);

            // Remove item from cart on click
            cartItem.querySelector(".remove-item").addEventListener("click", () => {
                cartItem.remove();
            });
        });
    });
});



