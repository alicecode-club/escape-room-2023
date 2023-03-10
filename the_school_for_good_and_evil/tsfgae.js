function activeChess() {
    alert("You have found the box!");
}

function coverImgCheck(item,coverNum) {
        setImgNormal(item);
        document.getElementById(item + coverNum).className = "imgCoverOnclick";
        //  document.querySelector("#coverImage").disabled = true;
        //document.getElementById("coverImage").classList.add("hide");
    switch(item) {
      case "cover":
        checkCoverNum(coverNum);
        break;
      case "letter":
        checkLetterNum(coverNum);
        break;
    }
    
}


function checkCoverNum(coverNum) {
    switch(coverNum) {
        case 2:
            showNum("4");
            break;
        case 1:
            showNum("A");
            break;
        case 3:
            showNum("P");
            break;
        case 4:
            showNum("K");
            break;
        case 5:
            showNum("L");
    }
}

function checkLetterNum(coverNum) {
    switch(coverNum) {
        case 2:
        case 4:
        case 1:
        case 5:
            showLetterNum("Worng");
            disableLetter();
            break;
        case 3:
            showButtonLetterRight();
            disableLetter();
            break;
    }
}

function setImgNormal(item) {
    for (let i = 1; i <= 5; i++) {
      document.getElementById(item + i).className = "coverImg";
    }
}

function showNum(num) {
    document.getElementById("coverQuetionNum").innerHTML = num;
    document.getElementById("coverQuetionNum").className = "coverQuestionNum";
    document.getElementById("coverQuestionNumCover").className = "show";
}

function showLetterNum(num) {
    document.getElementById("letterQuetionNum").innerHTML = num;
    document.getElementById("coverQuestionNumLetter").className = "show";
    document.getElementById("letterQuetionButton").className = "hide";
    document.getElementById("letterTryAgainB").className = "show";
}

function backToMain() {
    document.getElementById("sfgaeChessPage").className ="hide";
    document.getElementById("sfgaeLetterPage").className = "hide";
    document.getElementById("maPage").className = "show";
    document.getElementById("body").className = "map";
   // for (let i = 0; i < 5; i++) {
     //   document.getElementById("cover" + i).classList.add("coverImg");
    //  }
    document.getElementById("cover1").classList.add("coverImg");
    document.getElementById("cover2").classList.add("coverImg");
    document.getElementById("cover3").classList.add("coverImg");
    document.getElementById("cover4").classList.add("coverImg");
    document.getElementById("cover5").classList.add("coverImg");
    document.getElementById("coverQuestionNum").innerHTML = " ";
}

function activLetter() {
    alert("You have found the king's letter!");
}

function letterNextPage() {
document.getElementById("letterLetter").className = "hide";
document.getElementById("sfgaeLetterPage").className = "show";
}

function activePen() {
    alert("You have found the Pen!");
}


function showButtonLetterRight() {
    document.getElementById("coverQuestionNumLetter").className = "hide";
    document.getElementById("letterQuetionButton").className = "show";
    document.getElementById("letterTryAgainB").className = "hide"
}

function showAllLetter() {
    document.getElementById("sfgaeLetterPage").className = "hide";
    document.getElementById("letterTextLetter").className = "show";
}


function enableLetter(){
    document.getElementById("coverImage").className = "enAbleDiv";
}

function disableLetter(){
    document.getElementById("coverImage").className = "disableDiv";
}
function activDoor() {
    window.location.replace("forest1.html");
}

function direction1() {
    window.location.replace("forest2.html");
}

function direction2() {
    window.location.replace("forest3.html");
}

function direction4() {
    window.location.replace("forest1.html");
}

function note(){
    window.location.replace("note.html");
}
function checkDigetss() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    if(num1 == 4 && num2 == 8 && num3 == 2) {
        alert("Well done! You have found the legends!")
        document.getElementById("penDivChess").className ="show";
     }
     else {
        alert("Wrong! Try Again")
     }
    }
    function direction3() {
        window.location.replace("forest4.html");
     }

     function direction4() {
        window.location.replace("forest1.html");
    }