function toggleMenu() {
    var dropdown = document.getElementById("mobileNav");
    dropdown.classList.toggle("show");
}

document.addEventListener("click", function(event) {
    const mobileNav = document.getElementById("mobileNav");
    const hamburger = document.querySelector(".hamburger");

    // If the click is outside the mobile navigation and hamburger button, close the dropdown
    if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        mobileNav.classList.remove("show");
    }
})