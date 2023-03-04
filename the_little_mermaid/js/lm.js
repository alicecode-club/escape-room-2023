// ~ Start of add this. Change to your relative location and correct room number (1-6)
let fairyTaleroomNumber = 4; // I had to choose a diff name because of second script
localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../alicecode_questions/");
var q1answered= false;
var q2answered= false;
// ~ End of add this 
function correct() {
    alert("Correct!");
    q1answered=true;
    document.getElementById("correctAnswer").style.backgroundColor="green";
    
}

function correct1(){
    alert("Correct!");
     // ~ add THIS
     if(localStorage.getItem(`alice_question${fairyTaleroomNumber}_answered`) !== "true"){
        alert("You need to answer alice's question before you can leave!");
    }
    else{
        // escape the room!
        caveAppear()
        //just for testing
        localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
    }
    // ~ end of add THIS
  }
function wrongAnswer(){
    alert("wrong Answer")
} 
function caveAppear(){
    var x = document.getElementById("doorImg");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function theNextRoom(){
    window.location.assign("../../three_bears/zehava.html")

}