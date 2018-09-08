function navigate() {
    let navs = document.querySelector('.navbar');
    if(navs.style.display === "none") {
        navs.style.display = "flex";
        navs.style.transition = "1s";
    } else {
        navs.style.display = "none";
    }
}