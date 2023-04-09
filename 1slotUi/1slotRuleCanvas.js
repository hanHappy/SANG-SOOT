/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("gameRule");
const ctx = canvas.getContext('2d');

canvas.width = 1150;
canvas.height = 820;


//배경이미지1
const img1 = new Image();
img1.src = "./1slotImg/gameBack00.png";
img1.onload = function () {
    ctx.drawImage(img1, -105, -15, 1370, 840);
}

//규칙이미지
const info = new Image();
info.src = "./1slotImg/rule.png";
info.onload = function () {
    ctx.drawImage(info, 90, 95, 960, 600);
}

//스핀버튼 이미지
const yesBtn = new Image();
yesBtn.src = "./1slotImg/yesBtn.png";
yesBtn.onload = function () {
    ctx.drawImage(yesBtn, 800, 550, 150, 80);
}


// 버튼 클릭 시 실행될 함수 정의
function goToIndex() {
    window.location.href = "1slotGame.html";
    }
    
    // 버튼에 onclick 이벤트 추가
    canvas.addEventListener("click", function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
    
    // 클릭한 위치가 버튼 이미지 내부인 경우에만 이벤트 실행
    if (818 <= x && x <= 934 && 565 <= y && y <= 614) {
        console.log(x);
        goToIndex();
    }
});





// canvas.addEventListener('click', function(event) {
//     var rect = canvas.getBoundingClientRect(); // 캔버스의 위치와 크기 정보를 가져옴
//     var ix = event.clientX - rect.left; // 캔버스 내부에서의 x 좌표값 계산
//     var iy = event.clientY - rect.top; // 캔버스 내부에서의 y 좌표값 계산
//     console.log("x 좌표값: " + ix + ", y 좌표값: " + iy);
// });