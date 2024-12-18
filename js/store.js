$(function () {
  let baseline = -200;
  let footerline = -800;
  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
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

  //팝업
  $(".btn:last-child").on("click", function () {
    $(".modal").show();
  });
  $(".page1 .btn:last-child").on("click", function () {
    $(".popup1").show();
  });
  $(".page2 .btn:last-child").on("click", function () {
    $(".popup2").show();
  });
  $(".page3 .btn:last-child").on("click", function () {
    $(".popup3").show();
  });
  $(".page4 .btn:last-child").on("click", function () {
    $(".popup4").show();
  });

  $("button").on("click", function () {
    $(".popup").hide();
    $(".modal").hide();
  });

  //페이지 변경
  $(".page li").on("click", function () {
    i = $(this).index();
    // console.log(i);
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".pageWrap>li").hide();
    $(".pageWrap>li").eq(i).show();
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

  // 스크롤 이벤트
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
