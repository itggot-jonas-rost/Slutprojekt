function toggle_site() {
    document.getElementById("profile_site").classList.toggle("hide");
    document.getElementById("social_site").classList.toggle("show");
    
}

function Brag_dropdown() {
    document.getElementById("brag_Dropdown").classList.toggle("show");
}

function Customize_dropdown() {
    document.getElementById("customize_Dropdown").classList.toggle("show");
}

function change_profile_pic() {
    document.getElementById("profile_pic1").classList.toggle("clicked1");
}

function change_style() {
    document.getElementById("profile_site").classList.toggle("clicked2");
}

var slideIndex = 1;
change_slide_img(slideIndex);

function change_slideshow_show(n) {
    change_slide_img(slideIndex += n);
}

function change_slide_img(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_img");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}