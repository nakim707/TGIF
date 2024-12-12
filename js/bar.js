$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + footerline;
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
    } else if (scroll >= con3 && scroll <= footer) {
      //   console.log("con3");
      $("header").css({ opacity: "1" });
      $(".bev ul").addClass("on");
    } else {
      //   console.log("footer");
      $("header").css({ opacity: "1" });
    }
  });

  $("#con2 li").on("mouseover", function () {
    $(this).css({
      transform: "scale(1.5)",
      transition: "0.5s",
      position: "relative",
    });
  });
  $("#con2 li").on("mouseleave", function () {
    $("#con2 li").css({ transform: "scale(1)", position: "static" });
  });

  //alcohol

  let listTotal = $(".list li").length;
  let imgTotal = $(".img li").length;

  let i = 0;
  // console.log(listTotal);
  // console.log(imgTotal);

  $(".list li").on("click", function () {
    i = $(this).index();
    $(".list li").removeClass("on");
    $(this).addClass("on");
    $(".img li img").css({ width: "90px" });
    $(".img li").eq(i).children("img").css({ width: "200px" });
    $(".img li p").hide();
    $(".img li").eq(i).children("p").show();
  });

  //help

  // $(".list li").on("click", function () {
  //   $(".list li").removeClass("on");
  //   $(this).addClass("on");
  // });
  // $(".list li:nth-child(1)").on("click", function () {
  //   $(".img li img").css({ width: "90px" });
  //   $(".img li:nth-child(1) img").css({ width: "200px" });
  //   $(".img li p").hide();
  //   $(".img li:nth-child(1) p").show();
  // });
  // $(".list li:nth-child(2)").on("click", function () {
  //   $(".img li img").css({ width: "90px" });
  //   $(".img li:nth-child(2) img").css({ width: "200px" });
  //   $(".img li p").hide();
  //   $(".img li:nth-child(2) p").show();
  // });
  // $(".list li:nth-child(3)").on("click", function () {
  //   $(".img li img").css({ width: "90px" });
  //   $(".img li:nth-child(3) img").css({ width: "200px" });
  //   $(".img li p").hide();
  //   $(".img li:nth-child(3) p").show();
  // });
});
