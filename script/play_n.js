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
    nowNum = Math.floor( Math.random() * 65536)
    document.getElementById("question").textContent = nowNum.toLocaleString();
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
        }else if(num2[i] == "numKey_009"){
            ans += 256
        }else if(num2[i] == "numKey_010"){
            ans += 512
        }else if(num2[i] == "numKey_011"){
            ans += 1024
        }else if(num2[i] == "numKey_012"){
            ans += 2048
        }else if(num2[i] == "numKey_013"){
            ans += 4096
        }else if(num2[i] == "numKey_014"){
            ans += 8192
        }else if(num2[i] == "numKey_015"){
            ans += 16384
        }else if(num2[i] == "numKey_016"){
            ans += 32768
        }else if(num2[i] == "numKey_017"){
            ans += 65536
        }else if(num2[i] == "numKey_018"){
            ans += 131072
        }else if(num2[i] == "numKey_019"){
            ans += 262144
        }else if(num2[i] == "numKey_020"){
            ans += 524288
        }else if(num2[i] == "numKey_021"){
            ans += 1048576
        }else if(num2[i] == "numKey_022"){
            ans += 2097152
        }else if(num2[i] == "numKey_023"){
            ans += 419432
        }else if(num2[i] == "numKey_024"){
            ans += 8388608
        }else if(num2[i] == "numKey_025"){
            ans += 16777216
        }else if(num2[i] == "numKey_026"){
            ans += 33554432
        }else if(num2[i] == "numKey_027"){
            ans += 67108864
        }else if(num2[i] == "numKey_028"){
            ans += 134217728
        }else if(num2[i] == "numKey_029"){
            ans += 268435456
        }else if(num2[i] == "numKey_030"){
            ans += 536870912
        }else if(num2[i] == "numKey_031"){
            ans += 1073741824
        }else if(num2[i] == "numKey_032"){
            ans += 2147483648 
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

    numKey_009: "displayNum_009",
    numKey_010: "displayNum_010",
    numKey_011: "displayNum_011",
    numKey_012: "displayNum_012",

    numKey_013: "displayNum_013",
    numKey_014: "displayNum_014",
    numKey_015: "displayNum_015",
    numKey_016: "displayNum_016",

    numKey_017: "displayNum_017",
    numKey_018: "displayNum_018",
    numKey_019: "displayNum_019",
    numKey_020: "displayNum_020",

    numKey_021: "displayNum_021",
    numKey_022: "displayNum_022",
    numKey_023: "displayNum_023",
    numKey_024: "displayNum_024",

    numKey_025: "displayNum_025",
    numKey_026: "displayNum_026",
    numKey_027: "displayNum_027",
    numKey_028: "displayNum_028",

    numKey_029: "displayNum_029",
    numKey_030: "displayNum_030",
    numKey_031: "displayNum_031",
    numKey_032: "displayNum_032",
}

// 常にclassがnoneのチェックボックスを取得
const checkboxes = document.querySelectorAll('input[type="checkbox"].none');

questionID = 1

// 各チェックボックスにイベントリスナーを設定
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // チェック状態に応じて処理を実行
        if (checkbox.checked) {
            console.log(checkbox.id+'がオンになりました');
            checkedID.push(checkbox.id)
            displayID = labelID[checkbox.id]
            document.getElementById(displayID).textContent = 1

            // キーボード
            document.getElementById("now_num").textContent = to2(checkedID).toLocaleString();

            if (to2(checkedID) == nowNum){
                alert("correct!")
                if(questionID<10){
                    questionID+=1
                    nextQuestion()
                    document.getElementById("progress_problem").value = questionID
                    document.getElementById("title").textContent = `${questionID}/10`
                }else{
                    window.location.href = "../../result"
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

            document.getElementById("now_num").textContent = to2(checkedID).toLocaleString();

            if (to2(checkedID) == nowNum){
                alert("correct!")
                if(questionID<10){
                    questionID+=1
                    nextQuestion()
                    document.getElementById("progress_problem").value = questionID
                    document.getElementById("title").textContent = `${questionID}/10`
                }else{
                    window.location.href = "../../result"
                }
            }
        }
    });
});
