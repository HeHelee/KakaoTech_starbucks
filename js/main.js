// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll!');
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기, css가지고만 충분히 알 수 있음.
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  }else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : 'block'
    })
  }
},300));
//_.throttle(함수,시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl,1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

/// new Swpier(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동 재생 여부
  loop: true //반복 재생 여부 4번째 -> 1번째
});
new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal', //기본값임
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //0.5초에 한번씩 슬라이드가 자동으로 됨.
  },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //반대값으로 전환시켜줌.
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  }else {
    //보임 처리
    promotionEl.classList.remove('hide');

  }

});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
//  gsap.to(요소, 시간, 옵션);
gsap.to(
  selector, //선택자
  random(1.5, 2.5), //애니메이션 동작 시간
  {//옵션
  y: size,
  repeat: -1, //무한반복
  yoyo: true, //반복구조
  ease: "power1.inOut",
  delay : random(0, delay) //몇초 뒤에 애니메이션을 하겠다.
});

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);