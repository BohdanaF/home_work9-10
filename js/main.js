let burger = document.getElementById("burger");

let navbarList = document.getElementById("navbar");
console.log(burger);
console.log(navbarList);


burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navbarList.style.display = "block";
    if (navbarList.style.display === "block") {
        navbarList.style.display = "none"
    } else navbarList.style.display = "block"
})


