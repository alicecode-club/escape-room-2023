// ~ Start of js part 1/2 to add. Change:
// 1. relativeLocationToAliceFolder${fairyTaleroomNumber} = your relative location to /alicecode_questions/.
// 2. fairyTaleroomNumber = correct room number (1-6):
//   1: Little red riding hood, 2: Cinderella, 3: Hansel and Gretel, 4: The little mermaid
//   5: Zehava and the three bears, 6: The school for good and evil
let fairyTaleroomNumber = 5;

localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../../alicecode_questions/");
// ~ End of js part 1/2 to add 

// Question 1
var answer1 = "mother father and son";

function checkAnswer1() {
    var userAnswer = document.getElementById("answer1").value;
    if (userAnswer === answer1) {
        localStorage.setItem("answer1", true);
        document.getElementById("q1img").style.border=" 10px solid black;"
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
    // ~ Start of js part 2/2 to add: Add THIS in the function that lead to the next page
    if(localStorage.getItem(`alice_question${fairyTaleroomNumber}_answered`) !== "true"){
        alert("You need to answer alice's question before you can leave!");
    }
    else{
        // escape the room! = your code of moving to next page
        window.location.assign("../../the_school_for_good_and_evil/forest1.html")

        //just for testing
        localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
    }
    // ~ End of js part 2/2 to add


}