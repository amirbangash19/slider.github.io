var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter = 0;

for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i]
    img.addEventListener("click", function () {
        main.src = this.src
    })

}

// Header

var menuUL = document.getElementsByTagName("ul");
var heightOful = menuUL[0].scrollHeight;
var btnToggle = document.getElementsByClassName("btn-toggle");
btnToggle[0].addEventListener("click", function () {
    if (menuUL[0].style.maxHeight) {
        menuUL[0].style.maxHeight = null;
    }
    else {
        menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
    }
});