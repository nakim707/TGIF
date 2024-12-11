$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline - 100;
  let con2 = $("#con2").offset().top + baseline;
  let footer = $("footer").offset().top + footerline;

  let box1 = $(".con li:nth-child(1)").offset().top + baseline;
  let box2 = $(".con li:nth-child(2)").offset().top + baseline;
  let box3 = $(".con li:nth-child(3)").offset().top + baseline;
  let box4 = $(".con li:nth-child(4)").offset().top + baseline;
  let box5 = $(".con li:nth-child(5)").offset().top + baseline;
  //   console.log(visual, con1, con2, con3, footer);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= visual && scroll <= con1) {
      //   console.log("visual");
      $("header").css({ opacity: "0" });
    } else if (scroll >= con1 && scroll <= con2) {
      // console.log("con1");
      $("header").css({ opacity: "1" });
      $(".con li:nth-child(1)").addClass("on");
      let count1 = 0;
      stop = setInterval(function () {
        count1++;
        if (count1 > 47) {
          clearInterval(stop);
        } else {
          $("#con1 li:nth-child(1) div").text(count1);
        }
      }, 20);
      let count2 = 0;
      stop = setInterval(function () {
        count2++;
        if (count2 > 65) {
          clearInterval(stop);
        } else {
          $("#con1 li:nth-child(2) div").text(count2);
        }
      }, 20);
      let count3 = 850;
      stop = setInterval(function () {
        count3++;
        if (count3 > 1000) {
          clearInterval(stop);
        } else {
          $("#con1 li:nth-child(3) div").text(count3);
        }
      }, 10);
    } else if (scroll >= con2 && scroll <= footer) {
      // console.log("con2");
      $("header").css({ opacity: "1" });
      if (scroll >= box1 && scroll <= box2) {
        // console.log("box1");
        $(".con li:nth-child(2)").addClass("on");
      } else if (scroll >= box2 && scroll <= box3) {
        // console.log("box2");
        $(".con li:nth-child(3)").addClass("on");
      } else if (scroll >= box3 && scroll <= box4) {
        // console.log("box3");
        $(".con li:nth-child(4)").addClass("on");
      } else if (scroll >= box4 && scroll <= box5) {
        // console.log("box4");
        $(".con li:nth-child(5)").addClass("on");
      } else if (scroll >= box5) {
        // console.log("box5");
      }
    } else {
      // console.log("footer");
    }
  });
});
