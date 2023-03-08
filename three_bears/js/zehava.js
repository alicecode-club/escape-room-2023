// Question 1
var answer1 = "mother father and son";

function checkAnswer1() {
    var userAnswer = document.getElementById("answer1").value;
    if (userAnswer === answer1) {
        localStorage.setItem("answer1", true);
        alert("Correct! You answered " + userAnswer);
        window.location.href = "index.html";
    } else {
        alert("Incorrect! Please try again.");
    }
}

// Question 2
var answer2 = "Porridge";

function checkAnswer2() {
    var userAnswer = document.getElementById("answer2").value;
    if (userAnswer === answer2) {
        localStorage.setItem("answer2", true);
        alert("Correct! You answered " + userAnswer);
        window.location.href = "index.html";
    } else {
        alert("Incorrect! Please try again.");
    }
}

// Question 3
var answer3 = "In the son's bed";

function checkAnswer3() {
    var userAnswer = document.getElementById("answer3").value;
    if (userAnswer === answer3) {
        localStorage.setItem("answer3", true);
        alert("Correct! You answered " + userAnswer);
        window.location.href = "zehava.html";
    } else {
        alert("Incorrect! Please try again.");
    }
}

if (localStorage.getItem("answer1") && localStorage.getItem("answer2") && localStorage.getItem("answer3")) {
   
    // to give time for lines 17-18 to execute  
    setTimeout(function() {
    
        // escape the room!
        alert("Congratulations! You answered all the questions correctly and won!");
        doorAppear();
        }, 500);
    localStorage.clear()
}
function doorAppear(){
    document.getElementById("door1").style.visibility="visible";
}
function nextroom(){
    window.location.assign("../../the_school_for_good_and_evil/forest1.html")


}