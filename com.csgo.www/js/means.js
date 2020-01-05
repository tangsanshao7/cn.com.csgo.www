$(document).ready(function () {
  $(".guide-box").hide();
  $(window).scroll(function () {
    $(".guide-box").hide();
    $(".guide-span").removeClass("rotate1").addClass("rotate");

  })

  $(function () {

    $(".guide").click(function () {
      $(".guide-box").slideToggle();
      if ($(".guide-span").hasClass("rotate")) {
        $(".guide-span").removeClass("rotate").addClass("rotate1");
      } else {
        $(".guide-span").removeClass("rotate1").addClass("rotate");
      }
    })


  });
})


