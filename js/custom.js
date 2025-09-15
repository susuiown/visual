
//Photography
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  const container = document.querySelector(".main_scroll .inner");
  const totalScrollWidth = container.scrollWidth;
  const scrollLength = totalScrollWidth - window.innerWidth;

  gsap.to(container, {
    x: () => -scrollLength,
    ease: "none",
    scrollTrigger: {
      trigger: ".main_scroll",
      start: "top top",
      end: () => "+=" + (scrollLength + window.innerWidth),
      pin: true,
      scrub: 1,
    }
  });
});

//web
$(function () {

  const category_first_slide = new Swiper('.category_first_slide', {
    loop: true,
    slidesPerView: 1.5,
    slidesToScroll: 1,
    spaceBetween: 80,
    speed: 1000,

  });

  const description_slide = new Swiper('.description_slide', {
    loop: true,
    slidesPerView: 1,
    slidesToScroll: 1,
    spaceBetween: 80,
    speed: 1000,

  });

  category_first_slide.controller.control = description_slide;
  description_slide.controller.control = category_first_slide;


});

//visual
$(function () {
  // 초기 상태: 버튼/콘텐츠 모두 off → 썸네일 갤러리 on
  $('.main_visual .tab_menu button').removeClass('on');
  $('.main_visual .tab_content .con').removeClass('on');
  $('.main_visual .tab_content .thumbnails').addClass('on');

  // 특정 탭 열기 함수
  function openTab(idx) {
    $('.main_visual .tab_menu button').removeClass('on');
    $('.main_visual .tab_menu button').eq(idx).addClass('on');

    $('.main_visual .tab_content .con').removeClass('on');
    $('.main_visual .tab_content .thumbnails').removeClass('on'); // 썸네일 숨기기

    $('.main_visual .tab_content .con').not('.thumbnails').eq(idx).addClass('on');
  }

  // 탭 버튼 클릭
  $('.main_visual .tab_menu button').on('click', function () {
    let idx = $(this).index();
    openTab(idx);

    // hash 업데이트
    location.hash = "tab-" + idx;
  });

  // 썸네일 클릭
  $('.main_visual .tab_content .thumbnails .thumb').on('click', function () {
    let idx = $(this).data('index');
    openTab(idx);

    // hash 업데이트
    location.hash = "tab-" + idx;
  });

  // 페이지 로드 시 hash 확인
  if (location.hash.startsWith("#tab-")) {
    let idx = parseInt(location.hash.replace("#tab-", ""));
    if (!isNaN(idx)) {
      openTab(idx);
    }
  }

  // 뒤로가기/앞으로가기 감지
  $(window).on("hashchange", function () {
    if (location.hash.startsWith("#tab-")) {
      let idx = parseInt(location.hash.replace("#tab-", ""));
      if (!isNaN(idx)) {
        openTab(idx);
      }
    } else {
      // hash 없으면 썸네일 갤러리로 복귀
      $('.main_visual .tab_menu button').removeClass('on');
      $('.main_visual .tab_content .con').removeClass('on');
      $('.main_visual .tab_content .thumbnails').addClass('on');
    }
  });
});



// 내일의여행
$(function () {
  // 앞(작은) 슬라이드
  const project_set021_slide = new Swiper('.project_set021_slide', {
    loop: true,
    effect: 'fade',
    speed: 600,
    autoplay: { delay: 2000, disableOnInteraction: false },
    autoHeight: true,          // ★ 높이 자동
    observer: true,            // ★ 숨김→보임 감지
    observeParents: true
  });

  // 뒤(큰) 슬라이드
  const project_set022_slide = new Swiper('.project_set022_slide', {
    loop: true,
    effect: 'fade',
    speed: 600,
    autoHeight: true,          // ★ 높이 자동
    observer: true,
    observeParents: true
  });

  // 서로 컨트롤
  project_set021_slide.controller.control = project_set022_slide;
  project_set022_slide.controller.control = project_set021_slide;
});

$(window).on('hashchange', function () {
  if ($('.con.내일의여행').hasClass('on')) {
    project_set021_slide.updateAutoHeight(300);
    project_set022_slide.updateAutoHeight(300);
  }
});

$(function () {
  const main_local_slide = new Swiper('.main_local_slide', {
      slidesPerView: "1.9",
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 6, 
      spaceBetween: 0,

      autoplay: {
        delay: 1800,             
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      speed: 900,   
      on: {
        slideChangeTransitionStart(swiper) {
          swiper.el.classList.add('is-moving'); 
        },
        slideChangeTransitionEnd(swiper) {
          swiper.el.classList.remove('is-moving');
        }
      },
      breakpoints: {
          768: {
              spaceBetween: 0
          }
      }

      
  });
});

//탁상달력

$(function () {
  const sub_desk_slide = new Swiper('.sub_desk_slide', {
      loop: true,
      effect: "fade",
      autoplay: {
          delay: 3000,                // 3초마다 자동 전환
          disableOnInteraction: false // 사용자가 조작해도 자동재생 유지
      },
  });


});
