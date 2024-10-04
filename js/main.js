const burger = document.getElementById("burger");

const navbarList = document.getElementById("navbarList");

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navbarList.classList.toggle('active');
})