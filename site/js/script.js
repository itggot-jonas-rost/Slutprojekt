function toggle_site() {
    document.getElementById("profile_site").classList.toggle("hide");
    document.getElementById("social_site").classList.toggle("social_site_show");
    document.getElementById("toggle_site").classList.toggle("clicked3");  
}

function Brag_dropdown() {
    document.getElementById("brag_Dropdown").classList.toggle("show");
    document.getElementById("easter_egg_desk2").classList.toggle("fill_out_brag");
    document.getElementById("easter_egg_land2").classList.toggle("fill_out_brag");
}

function Customize_dropdown() {
    document.getElementById("customize_Dropdown").classList.toggle("show");
    document.getElementById("easter_egg_desk1").classList.toggle("fill_out_custom");
    document.getElementById("easter_egg_land1").classList.toggle("fill_out_custom");
}

function change_profile_pic() {
    document.getElementById("profile_pic1").classList.toggle("clicked1");
}

function change_style() {
    document.getElementById("profile_site").classList.toggle("clicked2");
}

var slideIndex = 1;
change_slide_img(slideIndex);

function change_slideshow_profile_show(n) {
    change_slide_img(slideIndex += n);
}

function change_slide_img(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_img_profile");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

function openSettings() {
    document.getElementById("mySettings").style.width = "67%";
}

function closeSettings() {
    document.getElementById("mySettings").style.width = "0";
}

function show_social_ipad_landscape() {
    var socialelement = document.getElementById("social_site_ipad_land");
    var socialWidth = window.getComputedStyle(socialelement, null).getPropertyValue("width");
    if (socialWidth != "710px") {
        document.getElementById("social_site_ipad_land").style.width = "710px";
        document.getElementById("profile_site").style.marginRight = "710px";
        document.getElementById("profile_site").style.position = "relative";
        document.getElementById("social_site_ipad_land").style.zIndex = "1";
        document.getElementById("social_site_ipad_land").style.boxShadow = "-200px 0px 300px 200px rgba(0,0,0,0.75)";
    } else {
        document.getElementById("social_site_ipad_land").style.width = "";
        document.getElementById("profile_site").style.marginRight = "0";
        document.getElementById("profile_site").style.position = "absolute";
        document.getElementById("social_site_ipad_land").style.zIndex = "0";
        document.getElementById("social_site_ipad_land").style.boxShadow = "none";
    }
}

function show_profile_ipad_landscape() {
    var profileelement = document.getElementById("profile_site");
    var profileWidth = window.getComputedStyle(profileelement, null).getPropertyValue("width");
    if (profileWidth != "710px") {
        document.getElementById("profile_site").style.width = "710px";
        document.getElementById("social_site_ipad_land").style.marginLeft = "710px";
        document.getElementById("social_site_ipad_land").style.position = "relative";
        document.getElementById("profile_site").style.zIndex = "1";
        document.getElementById("profile_site").style.boxShadow = "200px 0px 300px 200px rgba(0,0,0,0.75)";
    } else {
        document.getElementById("profile_site").style.width = "";
        document.getElementById("social_site_ipad_land").style.marginLeft = "0";
        document.getElementById("social_site_ipad_land").style.position = "absolute";
        document.getElementById("profile_site").style.zIndex = "0";
        document.getElementById("profile_site").style.boxShadow = "none";
    }
}