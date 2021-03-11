var menuBtn = $(".header-right > a:last-child, .hamburger-menu > a:last-child ");
var hamburgerMenu = $(".hamburger-menu");

menuBtn.click(
    function() {
        hamburgerMenu.toggleClass("active");
    }
)