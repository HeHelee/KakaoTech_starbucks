const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    //특정 요소에 클래스 정보를 가지고 있는 객체에서 add하겠다.
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    //특정 요소에 클래스 정보를 가지고 있는 객체에서 add하겠다.
    searchInputEl.setAttribute('placeholder','');
});