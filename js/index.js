$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + footerline;
  let footer = $("footer").offset().top + footerline;
  //   console.log(visual, con1, con2, con3, footer);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= visual && scroll <= con1) {
      //   console.log("visual");
      $("header").css({ opacity: "0" });
    } else if (scroll >= con1 && scroll <= con2) {
      //   console.log("con1");
      $("header").css({ opacity: "1" });
    } else if (scroll >= con2 && scroll <= con3) {
      //   console.log("con2");
      $("header").css({ opacity: "1" });
    } else if (scroll >= con3 && scroll <= con4) {
      //   console.log("con3");
      $("header").css({ opacity: "1" });
    } else if (scroll >= con4 && scroll <= footer) {
      //   console.log("con4");
      $("header").css({ opacity: "1" });
      $(".con4txt").addClass("on");
    } else {
      //   console.log("footer");
      $("header").css({ opacity: "1" });
    }
  });
});
