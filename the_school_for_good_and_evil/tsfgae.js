function activeChess() {
    alert("You have found the box!");
}

function coverImgCheck(item,coverNum) {
        setImgNormal(item);
        document.getElementById(item + coverNum).className = "imgCoverOnclick";
        // document.querySelector("#coverImage").disabled = true;
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
            showNum("8");
            break;
        case 3:
            showNum("5");
            break;
        case 4:
            showNum("6");
            break;
        case 5:
            showNum("7");
    }
}

function checkLetterNum(coverNum) {
    switch(coverNum) {
        case 2:
            showLetterNum("Worng");
            break;
        case 1:
            showLetterNum("Worng");
            break;
        case 3:
            showButtonLetterRight();
            break;
        case 4:
            showLetterNum("Worng");
            break;
        case 5:
            showLetterNum("Worng");
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

function activDoor() {
    window.location.replace("door.html");

    alert("You found the evil door!");
    setTimeout(function() {
        activDoor2();
    },10)
    
}

function activDoor2() {
    alert("Haha I caught you");
    alert("I'll let you go and tell you the third number only if you will answer this question correctly:")
    answer = prompt("What is the answer?");

    if (answer == "answer"){
        alert("Ugh you are right:( the number is 8")
    }
    else{
        alert("You stuck here forever haha")
    }
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
