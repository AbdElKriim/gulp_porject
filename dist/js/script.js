$(document).ready(function(){
    $(".toggleMenu").on("click", function(){
        $(".content_area , .sideBar").toggleClass("hide_menu");
    });
});