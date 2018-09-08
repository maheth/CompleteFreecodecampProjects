function navigate() {
    let navs = document.querySelector('.navbar');
   let oicon = document.querySelector('.fa-bars');
   
    if(navs.style.display === "none") {
        navs.style.display = "flex";
        oicon.style.transform = "rotate(30deg)";
        oicon.style.margin = "0 0 2% 0";


    } else {
        navs.style.display = "none";
        oicon.style.transform = "rotate(0deg)";
    }
}