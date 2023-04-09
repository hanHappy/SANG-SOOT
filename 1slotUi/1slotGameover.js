/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("gameover");
const ctx = canvas.getContext('2d');

canvas.width = 1150;
canvas.height = 820;


//배경이미지1
const img1 = new Image();
img1.src = "./1slotImg/gameBack00.png";
img1.onload = function () {
ctx.drawImage(img1, -105, -15, 1370, 840);
}



// 메인으로 버튼 클릭 시 실행될 함수 정의
function goToIndex() {
    window.location.href = "main.html";
    }
    
    // 버튼에 onclick 이벤트 추가
    canvas.addEventListener("click", function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
    
    // 클릭한 위치가 버튼 이미지 내부인 경우에만 이벤트 실행
    if (160 <= x && x <= 489 && 598 <= y && y <= 710) {
        console.log(x);
        goToIndex();
    }
});


// 종료하기 버튼 클릭 시 실행될 함수 정의
function goToIndex1() {
    window.location.href = "ending.html";
    }
    
// 버튼에 onclick 이벤트 추가
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

// 클릭한 위치가 버튼 이미지 내부인 경우에만 이벤트 실행
if (687 <= x && x <= 1013 && 595 <= y && y <= 707) {
    console.log(x);
    goToIndex1();
}
});






// 두 개의 배경 이미지 생성
const bgImg1 = new Image();
bgImg1.src = "./1slotImg/gameover1.png";
const bgImg2 = new Image();
bgImg2.src = "./1slotImg/gameover2.png";

// 초기 상태 설정
let currentBgImg = bgImg1;
let lastUpdateTime = 0;
const interval = 200;

function draw(timestamp) {
  // 이전 프레임과의 시간 차이를 계산
  const elapsedTime = timestamp - lastUpdateTime;

  // 일정 시간이 경과하면 배경 이미지 변경
  if (elapsedTime > interval) {
    lastUpdateTime = timestamp;

    // 현재 이미지가 bgImg1인 경우 bgImg2로, bgImg2인 경우 bgImg1로 변경
    if (currentBgImg === bgImg1) {
      currentBgImg = bgImg2;
    } else {
      currentBgImg = bgImg1;
    }
  }

  // 현재 배경 이미지 그리기
  ctx.drawImage(currentBgImg, -105, -15, 1370, 840);

    // // strBtn 이미지 그리기 ?????위랑 중복?????
    // ctx.drawImage(strBtn, 250, 530, 650, 300);

  // 다음 프레임 요청
  requestAnimationFrame(draw);
}

// 애니메이션 시작
requestAnimationFrame(draw);












    // 좌표값 찾는 코드
    canvas.addEventListener('click', function(event) {
        var rect = canvas.getBoundingClientRect(); // 캔버스의 위치와 크기 정보를 가져옴
        var ix = event.clientX - rect.left; // 캔버스 내부에서의 x 좌표값 계산
        var iy = event.clientY - rect.top; // 캔버스 내부에서의 y 좌표값 계산
        console.log("x 좌표값: " + ix + ", y 좌표값: " + iy);
    });