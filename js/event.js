$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let footer = $("footer").offset().top + footerline;
  //   console.log(visual, con1, con2, con3, footer);

  let event1 = $(".event1").offset().top + footerline;
  let event2 = $(".event2").offset().top + footerline;
  let event3 = $(".event3").offset().top + footerline;
  let event4 = $(".event4").offset().top + footerline;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= visual && scroll <= con1) {
      //   console.log("visual");
      // ------------   console.log("event1");
      $("header").css({ opacity: "0" });
      $(".txtLeft1").addClass("on");
      $(".txtRight1").addClass("on");
    } else if (scroll >= con1 && scroll <= con2) {
      //   console.log("con1");
      $("header").css({ opacity: "1" });

      if (scroll >= event3 && scroll <= event4) {
        // ------------ console.log("event3");
        $(".txtLeft2").addClass("on");
      } else if (scroll >= event4 && scroll <= footer) {
        // ------------ console.log("event4");
        $(".txtRight2").addClass("on");
      }
    } else if (scroll >= con2 && scroll <= footer) {
      //   console.log("con2");
      $("header").css({ opacity: "1" });
    } else {
      //   console.log("footer");
      $("header").css({ opacity: "1" });
    }
  });
});
