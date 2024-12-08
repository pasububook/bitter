function movePlay(){
    console.log("movePlay");

    if(document.getElementById("l_easy").checked == true){
        console.log("easy");
        window.location.href = "./play/easy/";
    }else if(document.getElementById("l_normal").checked == true){
        console.log("normal");
        window.location.href = "./play/normal/";
    }else if(document.getElementById("l_hard").checked == true){
        console.log("hard");
        window.location.href = "./play/hard/";
    }
}
