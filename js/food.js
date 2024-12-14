$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + footerline;
  let footer = $("footer").offset().top + footerline;
  //   console.log(visual, con1, con2, con3, footer);

  //헤더
  $("header li").on("mouseenter", function () {
    $(this).children(".pick").stop().animate({ width: "130%" });
  });
  $("header li").on("mouseleave", function () {
    $(this).children(".pick").stop().animate({ width: "0%" });
  });
  $(".bar").on("click", function () {
    $(".moGnb").slideToggle(1000);
  });

  //푸터
  $("footer .policy li").on("mouseenter", function () {
    $(this).children("div").stop().animate({ width: "100%" });
  });
  $("footer .policy li").on("mouseleave", function () {
    $(this).children("div").stop().animate({ width: "0%" });
  });
  $("footer .policy li:last-child").on("mouseenter", function () {
    $(this).css({ background: "white" });
    $(this).children("a").css({ color: "black" });
  });
  $("footer .policy li:last-child").on("mouseleave", function () {
    $(this).css({ background: "transparent" });
    $(this).children("a").css({ color: "white" });
  });
  $("footer .sns li").on("mouseenter", function () {
    $(this).css({ background: "#d70204" });
    $(this).children("a").css({ color: "white" });
  });
  $("footer .sns li").on("mouseleave", function () {
    $(this).css({ background: "white" });
    $(this).children("a").css({ color: "black" });
  });

  $("#con1 li").on("click", function () {
    $("#con1 li").removeClass("on");
    $(this).addClass("on");
    i = $(this).index();
    // console.log(i);
    $("#con2 li").hide();
    $("#con2 li").eq(i).show();
  });

  //스크롤
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
      $("#con2 .menu").addClass("on");
    } else if (scroll >= con3 && scroll <= footer) {
      //   console.log("con3");
      $("header").css({ opacity: "1" });
    } else {
      //   console.log("footer");
      $("header").css({ opacity: "1" });
    }
  });

  $(".recipe").on("mouseenter", function () {
    $(this).css({ "background-color": "white" });
    $(".recipe li").css({ color: "#d70204" });
    $(".recipe div").css({ "background-color": "#d70204" });
    $(".recipe div a").css({ color: "white" });
    $(".recipe .icon1").hide();
    $(".recipe .icon2").show();
  });
  $(".recipe").on("mouseleave", function () {
    $(this).css({ "background-color": "#d70204" });
    $(".recipe li").css({ color: "white" });
    $(".recipe div").css({ "background-color": "white" });
    $(".recipe div a").css({ color: "#d70204" });
    $(".recipe .icon1").show();
    $(".recipe .icon2").hide();
  });
  $(".allergy").on("mouseenter", function () {
    $(this).css({ "background-color": "#d70204" });
    $(".allergy li").css({ color: "white" });
    $(".allergy div").css({ "background-color": "white" });
    $(".allergy div a").css({ color: "#d70204" });
    $(".allergy .icon1").hide();
    $(".allergy .icon2").show();
  });
  $(".allergy").on("mouseleave", function () {
    $(this).css({ "background-color": "white" });
    $(".allergy li").css({ color: "#d70204" });
    $(".allergy div").css({ "background-color": "#d70204" });
    $(".allergy div a").css({ color: "white" });
    $(".allergy .icon1").show();
    $(".allergy .icon2").hide();
  });
});
