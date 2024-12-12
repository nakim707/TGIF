$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + footerline;
  let footer = $("footer").offset().top + footerline;
  //   console.log(visual, con1, con2, con3, footer);

  $("#con1 li").on("click", function () {
    $("#con1 li").removeClass("on");
    $(this).addClass("on");
    $("header").css({ opacity: "0" });
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
});
