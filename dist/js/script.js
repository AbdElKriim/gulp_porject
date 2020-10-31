$(document).ready(function(){
    $(".toggleMenu").on("click", function(){
        $(".content_area , .sideBar").toggleClass("hide_menu");
        $(this).find(".fa-angle-double-left").toggleClass("rotate");
    });
    // toggle chevron
    $('.toggle_chevron').on("click" , function(){
        $(this).find(".fa-chevron-right").toggleClass("down");
        $(this).next(".dropMenu").slideToggle();
    });

    $(".toggleSetting").on("click" , function(){
        $(this).find(".fa-cog").toggleClass("fa-spin");
        $(this).parent().toggleClass("hideSetting");
    });

    var myColors = [];
    $(".color_option li").each(function(){
        myColors.push($(this).data("color"));
    });

    console.log(myColors.join(" "));
    $(".color_option li").on("click" , function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("body").removeClass(myColors.join(" ")).addClass($(this).data("color"));
        console.log($(this).data("color"));
    });
});