
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
})();

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("contact_subject").value;
    return inputVal;
    // Displaying the value
    
}
let popup = document.getElementById("popup");
function openPopup(){
    var form = document.getElementById("contact-form");
    form.reset();
    popup.classList.add("open-popup");

}

function closePopup(){
    popup.classList.remove("open-popup");
}

