window.onload = function() {
    let seconds = 0;
    let minutes = 0;
    const display = document.getElementById('time');

    function updateDisplay() {
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        display.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    function startStopwatch() {
        setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 1000);
    }

    updateDisplay();
    startStopwatch();
};

// 問題の番号を作成する関数
var nowNum = 0
function nextQuestion(){
  nowNum = Math.floor( Math.random() * 255)
  document.getElementById("question").textContent = nowNum
}
nextQuestion()

// 正解かどうか確認する関数. Todo:将来的に削除
function isTrue(userNum, ans){
  // userNum: 10進数,  ans: 10進数
  if (userNum2 == ans){
    return true
  }else{
    return false
  }
}

function to2(num2){
    var ans = 0
    for(var i =0; i < num2.length; i++){
      if(num2[i] == "numKey_001"){
        ans += 1
      }else if(num2[i] == "numKey_002"){
        ans += 2
      }else if(num2[i] == "numKey_003"){
        ans += 4
      }else if(num2[i] == "numKey_004"){
        ans += 8
      }else if(num2[i] == "numKey_005"){
        ans += 16
      }else if(num2[i] == "numKey_006"){
        ans += 32
      }else if(num2[i] == "numKey_007"){
        ans += 64
      }else if(num2[i] == "numKey_008"){
        ans += 128
      }
    }

    return ans
}

// チェックボックスの状態を監視するプログラム
const checkedID = []
const labelID = {
    numKey_001: "displayNum_001",
    numKey_002: "displayNum_002",
    numKey_003: "displayNum_003",
    numKey_004: "displayNum_004",

    numKey_005: "displayNum_005",
    numKey_006: "displayNum_006",
    numKey_007: "displayNum_007",
    numKey_008: "displayNum_008",
}

// 常にclassがnoneのチェックボックスを取得
const checkboxes = document.querySelectorAll('input[type="checkbox"].none');

questionID = 1

// 各チェックボックスにイベントリスナーを設定
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // チェック状態に応じて処理を実行
    if (checkbox.checked) {
      console.log('チェックボックスがオンになりました');
      checkedID.push(checkbox.id)
      displayID = labelID[checkbox.id]
      document.getElementById(displayID).textContent = 1

      // キーボード
      document.getElementById("now_num").textContent = to2(checkedID)

      if (to2(checkedID) == nowNum){
        alert("correct!")
        if(questionID<=10){
          questionID+=1
          nextQuestion()
          document.getElementById("progress_problem").value = questionID
          document.getElementById("title").textContent = `${questionID}/10`
        }
      }
    } else {
      console.log('チェックボックスがオフになりました');

      // 削除したい要素のインデックスを取得
      const index = checkedID.indexOf(checkbox.id);

      if (index !== -1) {
        checkedID.splice(index, 1);
      }

      displayID = labelID[checkbox.id]
      document.getElementById(displayID).textContent = 0

      document.getElementById("now_num").textContent = to2(checkedID)
    }
  });
});
