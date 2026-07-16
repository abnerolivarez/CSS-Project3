

const bookTable = document.querySelectorAll(".people");
bookTable.forEach(el=>{
    el.addEventListener("click",()=>{
        bookTable.forEach(p=>{
            p.classList.remove("active");
        });
         el.classList.add("active");

        //  Save the selected value
         partySize.value = el.dataset.value;
    });
});