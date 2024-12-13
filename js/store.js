$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let footer = $("footer").offset().top + footerline;
  //   console.log(visual, con1, con2, con3, footer);
  $(".btn li:last-child").on("click", function () {
    $("#popup").show();
    $(".modal").show();
  });
  $("button").on("click", function () {
    $("#popup").hide();
    $(".modal").hide();
  });
  $(".page li").on("click", function () {
    $(".page li").removeClass("on");
    $(this).addClass("on");
  });
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= visual && scroll <= con1) {
      //   console.log("visual");
      $("header").css({ opacity: "0" });
    } else if (scroll >= con1 && scroll <= con2) {
      //   console.log("con1");
      $("header").css({ opacity: "1" });
    } else if (scroll >= con2 && scroll <= footer) {
      //   console.log("con2");
      $("header").css({ opacity: "1" });
    } else {
      //   console.log("footer");
      $("header").css({ opacity: "1" });
    }
  });
});
