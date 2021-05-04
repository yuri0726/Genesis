// Hero Slide 구현

   // 슬라이드 컨텐츠 컬렉션
   var divSlide = document.getElementsByClassName('slide');
   // 인덱스 버튼 컬렉션
   var indexBtnBullet = document.getElementsByClassName('index_btn_bullet');

   // 현재 슬라이드 넘버
   var currentSlideNum = 0;
   var slideLength = divSlide.length;
   var slidePlayBtn = document.getElementById('slide_play_btn');

   var slideAutoState = true; // 슬라이드 오토 기능이 동작 여부
   var slideAutoI = setInterval(slideMove,5000);   


function heroSlide(target) {

   slideAllHide();
   
   // 현재 슬라이드 넘버를 업데이트
   currentSlideNumber = target;

   // 해당 슬라이드만 보여지게
   divSlide[target].style.display = "block";
   divSlide[target].style.animation = "fade_in 1s forwards";

   // 해당 인덱스 버튼만 활성화
   indexBtnBullet[target].style = "width: 12px; height: 12px; border: 2px solid rgb(255, 255, 255); background-color: rgba(255, 255, 255, 0); border-radius: 6px;";

   slideIntervalRestart();

}

function slideMove(direction) {

   clearInterval(slideAutoI)

   if ( direction == 'next' || direction == undefined ) {

      // 현재 슬라이드 넘버 1 증가
      currentSlideNum++;

   } else if ( direction == 'prev' ) {

      // 현재 슬라이드 넘버 1 감소
      currentSlideNum--;

   };

   if ( currentSlideNum > slideLength - 1 ) {

      currentSlideNum = 0;

   } else if ( currentSlideNum < 0 ) {

      currentSlideNum = slideLength - 1;

   };

   slideAllHide();

   currentSlideShow();

   slideIntervalRestart();

}

function slideAllHide() {

   for (i=0; i<divSlide.length; i++) {

      // 컨텐츠를 모두 사라지게
      divSlide[i].style.display = "none";

      // 인덱스 버튼 초기화
      indexBtnBullet[i].style = "width: 8px; height: 8px; border: none; background-color: rgba(255, 255, 255, 0.4); border-radius: 4px;";

   }

}

function currentSlideShow() {

   // 해당 슬라이드만 보여지게
   divSlide[currentSlideNum].style.display = "block";
   divSlide[currentSlideNum].style.animation = "fade_in 1s forwards";

   // 해당 인덱스 버튼만 활성화
   indexBtnBullet[currentSlideNum].style = "width: 12px; height: 12px; border: 2px solid rgb(255, 255, 255); background-color: rgba(255, 255, 255, 0); border-radius: 6px;";

}

function slideAutoPlay() {

   // 슬라이드 오토 기능이 동작중이면 중지 시킴
   if ( slideAutoState == true ) {

      clearInterval(slideAutoI); // 오토 인터벌을 중지
      slidePlayBtn.src = "img/play_btn.svg"; // 아이콘을 플레이로 변경
      slideAutoState = false; // 슬라이드 오토 기능 멈춤

   } else {

      // 자동 재생 시작
      slideAutoI = setInterval(slideMove,5000);
      // 일시 정지 버튼으로 이미지 변경
      slidePlayBtn.src = "img/stop_btn.svg";
      // 슬라이드 오토 기능 중지라고 업데이트 시켜줌
      slideAutoState = true;

   }

}

function slideIntervalRestart() {
   
   clearInterval(slideAutoI);
   slideAutoI = setInterval(slideMove,5000);

}