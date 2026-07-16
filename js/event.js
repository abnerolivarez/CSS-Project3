const dropdown = document.querySelector(".dropdown");
const btn = document.querySelector(".dropdown-btn");

btn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

// Dropdown Highlight
const dropBtn = document.querySelectorAll(".dropBtn");
dropBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{

        dropBtn.forEach(menu=>{ 
            menu.classList.remove("active");
        });
        btn.classList.add("active");
    });
});


// Show the image when click the menu
function showGrid(className) {
    document.querySelectorAll(".grid").forEach(grid => {
        grid.style.display = "none";
    });

    document.querySelector(`.${className}`).style.display = "grid";
}



const placeBtns = document.querySelectorAll(".place-btn");

placeBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const submenu = this.nextElementSibling;
        const arrow = this.querySelector(".arrow");

        // Close all other submenus
        document.querySelectorAll(".submenu").forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = "none";
            }
        });

        // Reset all arrows
        document.querySelectorAll(".arrow").forEach(a => {
            if (a !== arrow) {
                a.textContent = "▶";
            }
        });

        // Toggle current submenu
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
            arrow.textContent = "▶";
        } else {
            submenu.style.display = "block";
            arrow.textContent = "▼";
        }
    });
});