var menuBtn = $(".header-right > a:last-child");
var hamburgerMenu = $(".hamburger-menu");
var closeMenu = $(".hamburger-menu > a:last-child")

menuBtn.click(
    function() {
        hamburgerMenu.addClass("active");
    }
)

closeMenu.click(
    function() {
        hamburgerMenu.removeClass("active");
    }
)