//버튼 이벤트 리스너(사용자가 뭘 먼저 누를지 모름) -> 클래스 가져오기
//클래스 구조 .btns > .btn-num .btn-num-zero, -float / .btn-op > .ac, equal

const buttons = document.querySelector(".btns");
let result = []; // 스택 이용하면 되지 않나?
let dpVal = document.querySelector('.dp-value');

buttons.addEventListener(click, function (event) {
  const target = event.target; // 상수 타겟에 html element 저장
  const action = target.classList[0]; // 상수 액션에 클래스 첫번째꺼 저장
  const btnContent = target.textContent; // 상수 버튼내용에 html element가 가지고 있는 text저장

  if (target.match("button")) {
    if (action === "btn-num") {
        // result.add(parseInt(action));
        if (!isNaN(result[result.length-1])) {
            result.add(result[result.length-1] + action)
        }
    } else if (action === "btn-op") {
      // op 들어오는 경우 -> result에 숫자 있으면 저장 -> 없으면 저장안함
    } else if (action === "btn-op--ac") {
      // result 내 모든 요소 제거
    } else if (action === "btn-op--equal") {
      // result[0] 리턴
    }
    dpVal.textContent = btnContent;
  }
});
