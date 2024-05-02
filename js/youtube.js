 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() { //함수 이름 바꾸면 안됨. 유튜브 라이브러리 이기 떄문
    //<div id = "player"></div>
     new YT.Player('player', {
     videoId: 'ft70sAYrFyY', //최초 재생할 유튜브 ID
     playerVars: {
        autoplay: true, //자동 재생 유무
        loop: true, //반복 재생 유무
        playList : 'ft70sAYrFyY' //반복 재생할 유튜브 영상 ID 목록
     },
     events: {
        onReady: function (event) {
            event.target.mute() //음소거

        }
     }


   });
 }