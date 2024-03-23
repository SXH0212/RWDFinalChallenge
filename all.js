$(document).ready(function () {
    $('.burger-btn').click(function (e) { 
        e.preventDefault();
        $('.menu-list').toggleClass('active');
    });
    
    $(".top").hide();
    $(".goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          500
        );
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $(".top").show();
          if ($(".top").hasClass("hide")) {
            $(".top").toggleClass("hide");
          }
        } else {
          $(".top").addClass("hide");
        }
      });
});
