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

// 各チェックボックスにイベントリスナーを設定
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // チェック状態に応じて処理を実行
    if (checkbox.checked) {
      console.log('チェックボックスがオンになりました');
      checkedID.push(checkbox.id)
      alert(checkedID)
    } else {
      console.log('チェックボックスがオフになりました');
      // チェックオフ時の処理をここに記述
      // 削除したい要素のインデックスを取得
      const index = checkedID.indexOf(checkbox.id);

      // インデックスが存在する場合に削除
      if (index !== -1) {
        checkedID.splice(index, 1);
      }

      alert(checkedID)
    }
  });
});
