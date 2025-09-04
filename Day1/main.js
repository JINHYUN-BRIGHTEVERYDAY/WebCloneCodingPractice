// 변수 선언 먼저
let target = document.querySelector("#dynamic");
// dynamic 라인을 가지고 있는 문서 객체를 선택해라


function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
// 선택된 문자열을 이 기준으로 분리시켜라

    return selectStringArr; //최종값 반환
}


// 타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());




// 함수를 선언함, 반짝거리는 기능을 넣기 위해
// blink라는 함수를 사용
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);
// setInterval은 반복함수
// blink를 0.5초마다 실행하라