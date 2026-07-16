

      const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

      // script.js
      document.addEventListener('scroll', function() {
      const rect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top >= windowHeight && rect.bottom <= 0) {
          header.classList.remove('visible');
      } else {
          header.classList.add('visible');
      }
  });

    const menuBowl = document.querySelector(".menu-bowl");
    const menuImage = [

        { title:"Pork Egg", img:"image/bowl/bowl1.png", description:"Korean food pork egg", price:"350", },
        { title:"Pork Noodles ", img:"image/bowl/bowl2.png", description:"Pork, rice & vegetable", price:"450", },
        { title:"Chiken Teriyaki", img:"image/bowl/bowl3.png", description:"Japanese rice teriyaki", price:"380", },
        { title:"Chiken Brocolli", img:"image/bowl/bowl4.png", description:"Vegetable carrot teriyaki", price:"350", },

        { title:"Chicken Beryani", img:"image/bowl/bowl5.png", description:"Spicy Beryani", price:"350", },
        { title:"Shrimp Avocado", img:"image/bowl/bowl6.png", description:"Delicious Shrimp Avocado", price:"450", },
        { title:"Spaghetti Meatball", img:"image/bowl/bowl7.png", description:"Spaghetti with meatball", price:"380", },
        { title:"Chiken Brocolli", img:"image/bowl/bowl4.png", description:"Vegetable carrot teriyaki", price:"350", },
];

    menuBowl.innerHTML = menuImage.map(i=>`
            <div class="menu-details">
                <div class="menu-content">
                    <img src="${i.img}" alt="${i.img}">
                    <h4 class="">${i.title}</h4>
                    <p class="description">${i.description}</p>
                    <p>₱${i.price}</p>
                    <span class="bowl-order">Order Now</span>
                </div>
            </div>
        
        `).join("");



// Food & Spoon Section
const cards = document.querySelectorAll(".menu-details");

let start = 0;
let visibleCards = window.innerWidth <= 768 ? 1 : 4;  // 768px is media size or small device

function updateVisibleCards() {
    visibleCards = window.innerWidth <= 768 ? 1 : 4;

    // Prevent start from exceeding the number of cards
    if (start > cards.length - visibleCards) {
        start = Math.max(0, cards.length - visibleCards);
    }

    showCards();
}

function showCards() {
    cards.forEach(card => card.style.display = "none");

    for (let i = start; i < start + visibleCards && i < cards.length; i++) {
        cards[i].style.display = "block";
    }
}

updateVisibleCards();

function nextSlide() {
    if (start + visibleCards < cards.length) {
        start++;
    } else {
        start = 0;
    }

    showCards();
}

function prevSlide() {
    if (start > 0) {
        start--;
    } else {
        start = Math.max(0, cards.length - visibleCards);
    }

    showCards();
}

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

// Update when screen is resized
window.addEventListener("resize", updateVisibleCards);





const menuButtons = document.querySelectorAll(".menubtn");

menuButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from all buttons
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to the clicked button
        button.classList.add("active");
    });
});



      // Animation image
      document.addEventListener('scroll', function() {
      const images = document.querySelectorAll('.kitchen,.kitchen1');
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      images.forEach(function(image){
      const rect = image.getBoundingClientRect();
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          image.classList.add('visible');
      } else {
          image.classList.remove('visible');
      }
    });
      
  });

  // Header Background 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img1');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});


// Order Cart Show & Remove
const cartOpen = document.querySelector('.icon');
const cartContainer = document.querySelector('.cart-container');
const amountOrder = document.querySelector('.amount-order');
   
            cartOpen.addEventListener('click', ()=>{
            cartContainer.classList.toggle('show');
            cartOpen.classList.toggle('show');
            
            amountOrder.classList.toggle('show');
            cartOpen.classList.toggle('show');
        });


// Add item and Checkout
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    let totalPrice = 0;

    let cart = {};

    document.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            if (cart[itemName]) {
                cart[itemName].quantity += 1;
            } else {
                cart[itemName] = {
                    price: itemPrice,
                    quantity: 1
                };
            }

            updateCart();
        });
    });

   

    function updateCart() {
        cartItems.innerHTML = '';
        totalPrice = 0;

        for (const [itemName, itemDetails] of Object.entries(cart)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} - Php${itemDetails.price.toFixed(2)} X ${itemDetails.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                if (itemDetails.quantity > 1) {
                    itemDetails.quantity -= 1;
                } else {
                    delete cart[itemName];
                }
                updateCart();
            });

            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            totalPrice += itemDetails.price * itemDetails.quantity;
        }

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    
    checkoutButton.addEventListener('click', () => {
        if (totalPrice > 0) {
            alert(`Your total is Php${totalPrice.toFixed(2)}. Thank you for your purchase!`);
            cartItems.innerHTML = '';
            totalPrice = 0;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            for (const itemName in cart) {
                delete cart[itemName];
            }
        } else {
            alert('Your cart is empty!');
        }
    });
});



// Our Special Menu 
function showFoodMenu(menuClass) {
    // Hide all food menus
    document.querySelectorAll(
        ".foodmenu-container, .foodmenu-pasta, .foodmenu-eggparsley, .foodmenu-toad, .foodmenu-sandwichegg, .foodmenu-tacos"
    ).forEach(menu => menu.style.display = "none");

    // Show the selected menu
    document.querySelector(menuClass).style.display = "block";
}

function closeMenu() {
    document.querySelectorAll(
        ".foodmenu-container, .foodmenu-pasta, .foodmenu-eggparsley, .foodmenu-toad, .foodmenu-sandwichegg, .foodmenu-tacos"
    ).forEach(menu => menu.style.display = "none");
}



// Animating when the button click
function animateElement(element) {
    element.classList.remove("animate-menu"); //animate-menu is located in foodmenu.css
    void element.offsetWidth; // Restart animation
    element.classList.add("animate-menu");
}


function showMenu(menuClass) {
    document.querySelectorAll(
        ".menu-info, .menu-brunch, .menu-lunch, .menu-dinner"
    ).forEach(menu => menu.style.display = "none");

    const activeMenu = document.querySelector(menuClass);
        activeMenu.style.display = "block";

    animateElement(activeMenu);
}


const stars = document.querySelectorAll(".star");


stars.forEach((star, index) => {

    star.addEventListener("mouseenter", () => {
        console.log(stars.length);
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("hovered");
            } else {
                s.classList.remove("hovered");
            }
        });

    });

    star.addEventListener("mouseleave", () => {

        stars.forEach(s => {
            s.classList.remove("hovered");
        });

    });

});




