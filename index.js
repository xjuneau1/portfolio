//using variable to get DOM
const open = document.getElementById("open")
const contact = document.getElementById("contact-container")
const close  = document.getElementById("close")
//adding event listeners to the buttons via the open variable
//creating a function that adds to/triggers the 'show' class in the style.css
open.addEventListener("click", () => {
    contact.classList.add('show')
})
//removes the 'show' class from the style.css
close.addEventListener("click", () => {
    contact.classList.remove('show')
})