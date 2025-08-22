
$(function () {
  $(".slick-area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    prevArrow: '<button type="button" class="slick-prev">◀</button>',  // 左矢印
    nextArrow: '<button type="button" class="slick-next">▶</button>',  // 右矢印
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  function setEqualHeight() {
    let maxHeight = 0;
    $('.menu-item').each(function () {
      $(this).css('height', 'auto'); // 一度リセット
      const h = $(this).outerHeight();
      if (h > maxHeight) maxHeight = h;
    });
    $('.menu-item').height(maxHeight);
  }

  // slickが初期化された後に実行
  $(window).on('load', function () {
    setEqualHeight();
  });

  $(window).on('resize', function () {
    setEqualHeight();
  });

  let autoplayTimer;

  // 手動で左右ボタンを押した時に2秒後再スタート
  $slider.on("afterChange", function () {
    clearTimeout(autoplayTimer);
    $slider.slick("slickPause");

    autoplayTimer = setTimeout(function () {
      $slider.slick("slickPlay");
    }, 2000);
  });
});



