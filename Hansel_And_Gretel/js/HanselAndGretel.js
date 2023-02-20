let degreesPuzzle=false;
let cagePuzzle=false;

function exit() {
    var code_solved= localStorage.getItem("code_solved");
    if (code_solved==null) {
        alert("you have to solve the puzzle first")
        window.location.replace("../html/colorPuzzle.html");
    }
    else {
        alert("you escaped!");
        localStorage.removeItem("code_solved");
    }
}

function oven(){
    if (degreesPuzzle==false) {
    alert("the oven is now on!");
    var imgReplace = document.getElementsByClassName("myImg")[0];
    imgReplace.src = "../media/oven_on.png";
    degreesPuzzle=true; }
}

function cage() {
    if (cagePuzzle==false) {
        alert ("Hansel: I'm too scared! Unlock the cage and maybe I will remember something");
        popUp();
    }
    if (cagePuzzle==true){
        alert ("Hansel: Thank you! I remember now! the candies that were above the door were blue, blue, red, green.");
    }
}

function popUp() {
    let pop= document.getElementById("pop");
    pop.classList.add("popUp");
}

function popDown() {
    pop.classList.remove("popUp");
}

function submit() {
    var num1= document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var whole_code= num1+num2+num3+num4;
    if (whole_code==2198) {
        alert ("the cage is unlocked!");
        popDown();
        cagePuzzle=true;
    }
    else {
        alert ("wrong code try again");
    }
}