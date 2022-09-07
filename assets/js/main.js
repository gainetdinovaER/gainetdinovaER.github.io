 $(document).ready(function() {
    //  size();
    //  $(window).resize(function() {
    //      size();
    //  });

    //  function size() {
    //      var scrollWidth = document.offsetWidth - document.clientWidth,
    //          width = window.innerWidth - scrollWidth,
    //          height = window.innerHeight;
    //      $('#home,#home .home,#home .bg').css({
    //          "width": width,
    //          "height": height
    //      });
    //  }
    //  window.onscroll = function() {
    //      var pageY = window.pageYOffset;
    //      Y = pageY / 2;
    //      bgpos = "50% " + Y + "px";
    //      $("#home .bg").css({
    //          "background-position": bgpos
    //      });
    //      if (pageY >= 200) {
    //          $("nav").addClass("menu_scroll");

    //      } else {
    //          $("nav").removeClass("menu_scroll");
    //      }
    //  }
     $("nav a").mPageScroll2id({});

 });