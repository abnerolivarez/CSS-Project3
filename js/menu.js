const menuPict = [
    
    {category:"breakfast",img:"image/br1.png",description:"Burghi Spice Scrammble Egg",price: 250,},
    {category:"breakfast",img:"image/br2.png",description:"Egg Cups with Parsley",price: 280,},
    {category:"breakfast",img:"image/br3.png",description:"Sandwich with Egg",price: 350,},
    {category:"breakfast",img:"image/br4.png",description:"Logsilog",price: 350,},
    {category:"breakfast",img:"image/br5.png",description:"Hashbrown Casserole",price: 350,},
    {category:"breakfast",img:"image/br6.png",description:"Toad the Hole",price: 350,},

    {category:"lunch",img:"image/lunch1.png",description:"Kare-Kare",price: 350,},
    {category:"lunch",img:"image/lunch2.png",description:"Tofu with Brocolli",price: 350,},
    {category:"lunch",img:"image/lunch3.png",description:"Sisig",price: 350,},
    {category:"lunch",img:"image/lunch4.png",description:"Tokwat Baboy",price: 350,},
    {category:"lunch",img:"image/lunch5.png",description:"Grilled Chicken",price: 350,},
    {category:"lunch",img:"image/lunch6.png",description:"Pinakbet",price: 350,},

    {category:"dinner",img:"image/dinner1.png",description:"Bake Salmon",price: 350,},
    {category:"dinner",img:"image/dinner2.png",description:"Meat with Potatoes",price: 350,},
    {category:"dinner",img:"image/dinner3.png",description:"Grilled Meat & Salad",price: 350,},
    {category:"dinner",img:"image/dinner4.png",description:"Roast Chicken with Brocolli",price: 350,},
    {category:"dinner",img:"image/dinner5.png",description:"Lobster Frites",price: 350,},
    {category:"dinner",img:"image/dinner6.png",description:"Fried Tofu",price: 350,},

    {category:"dessert",img:"image/dessert1.png",description:"Caramel Cheese Cocon",price: 350,},
    {category:"dessert",img:"image/dessert2.png",description:"Banana Fried Toron",price: 350,},
    {category:"dessert",category:"",category:"",img:"image/dessert3.png",description:"Halo-Halo",price: 350,},
    {category:"dessert",img:"image/dessert4.png",description:"Cheesecake Toppe",price: 350,},
    {category:"dessert",img:"image/dessert5.png",description:"Brazo de Mercedes Cupcake",price: 350,},
    {category:"dessert",img:"image/dessert6.png",description:"Golden Brown Bibingka",price: 350,},

    {category:"drinks",img:"image/drinks1.png",description:"Gin Cocktail ",price: 350,},
    {category:"drinks",img:"image/drinks2.png",description:"Fig Baslamic Latte ",price: 350,},
    {category:"drinks",img:"image/drinks3.png",description:"Watermelon & Ginger Limeade",price: 350,},
    {category:"drinks",img:"image/drinks4.png",description:"Blueberry & Watermelon Slushie",price: 350,},
    {category:"drinks",img:"image/drinks5.png",description:"Watermelon Limeade ",price: 350,},
    {category:"drinks",img:"image/drinks6.png",description:"Rio-Style Ginger Beer Floats",price: 350,},

    {category:"bowl",img:"image/drinks6.png",description:"Rio-Style Ginger Beer Floats",price: 350,},

];


const imgContent = document.querySelector(".menu-details-container");
const menuTitle =document.querySelector(".ourmenu-title");

    function showCategory(category){

    let filteredMenu;

    if(category === "allmenu"){
        filteredMenu = menuPict;  //Show everything
        menuTitle.textContent = "All Meals";
    }else{
            filteredMenu = menuPict.filter(item=> item.category === category);
            menuTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1); //slice(1) is read the array from 1 above  
    }
    

        imgContent.innerHTML = filteredMenu.map(item=>`
            
            <div class="img-container"> 
                <img src="${item.img}" class="img1"alt="Breakfast image">
                <p class="img-name">${item.description}</p>
                <div class="price-container">
                        <span class="price">₱${item.price}</span> 
                    <span>
                        <i class="fa-solid fa-basket-shopping add-cart" 
                            data-name="${item.description}" 
                            data-price="${item.price}">
                        </i>
                        <span class="advance-order">Advance Order</span>
                    </span>
                </div>        
            </div> 
        
        
        `).join("");

        }

        // Show all menu items when the page loads
        showCategory("allmenu");

    const categoryBtn = document.querySelectorAll(".categorybtn");

        categoryBtn.forEach(btn=>{
            btn.addEventListener("click",()=>{
                categoryBtn.forEach(el=>{
                    el.classList.remove("active");
                });
                    btn.classList.add("active");
            });
        });



const imagePict = [
    {
        img:"image/profile1.jpg",
        message:"ARC is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality",
        name:"Melissa Joe",
    },

    {
        img:"image/profile2.jpg",
        message:"ARC is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality",
        name:"Kate",
    },

    {
        img:"image/profile3.jpg",
        message:"ARC have signature dish and this is my first time to have a great food and taste i ever had.",
        name:"David",
    },

    {
        img:"image/profile4.jpg",
        message:"ARC is one of the most popular and tasty Restaurant with unique & special test food menu",
        name:"Matt",
    },
];

const testimonialImg = document.querySelector(".testimonial-background");

        testimonialImg.innerHTML = imagePict.map(item=>`
            <div class="test-container">
                <div class="test-content">
                    <img src="${item.img}" alt="${item.img}" class="test-img">
                    <p class="test-message">${item.message}</p>
                    <div class="test-star">
                        <div>
                            <span>${item.name}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-star star"></i>
                            <i class="fa-solid fa-star star"></i>
                            <i class="fa-solid fa-star star"></i>
                            <i class="fa-solid fa-star star"></i>
                            <i class="fa-solid fa-star star"></i>
                        </div>
                    </div>

                </div>
            </div>
    `).join("");




const cardstest = document.querySelectorAll(".test-container");

let starttest = 0;
let visibleCardsTest = window.innerWidth <= 768 ? 1 : 2;  // 768px is media size or small device

function updateVisibleCardsTest() {
    visibleCardsTest = window.innerWidth <= 768 ? 1 : 2;

    // Prevent start from exceeding the number of cards
    if (starttest > cardstest.length - visibleCardsTest) {
        starttest = Math.max(0, cardstest.length - visibleCardsTest);
    }

    showCards();
}

function showCards() {
    cardstest.forEach(card => card.style.display = "none");

    for (let i = starttest; i < starttest + visibleCardsTest && i < cardstest.length; i++) {
        cardstest[i].style.display = "block";
    }
}

updateVisibleCardsTest();

function nextSlide() {
    if (starttest + visibleCardsTest < cardstest.length) {
        starttest++;
    } else {
        starttest = 0;
    }

    showCards();
}

function prevSlide() {
    if (starttest > 0) {
        starttest--;
    } else {
        starttest = Math.max(0, cardstest.length - visibleCardsTest);
    }

    showCards();
}

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

// Update when screen is resized
window.addEventListener("resize", updateVisibleCardsTest);




