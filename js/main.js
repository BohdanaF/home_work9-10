const burger = document.getElementById("burger");

const navbarList = document.getElementById("navbarList");

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    if (navbarList.style.display === "block") {
        navbarList.style.display = "none"
    } else navbarList.style.display = "block"
})