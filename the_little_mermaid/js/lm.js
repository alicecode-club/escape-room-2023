// ~ Start of add this. Change to your relative location and correct room number (1-6)
let fairyTaleroomNumber = 4; // I had to choose a diff name because of second script
localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../alicecode_questions/");
var q1answered= false;
var q2answered= false;
// ~ End of add this 
let q1_correct = false;
let q2_correct = false;
function correct(q_number) {
  alert("Correct!");
  if(q_number==1){
    q1_correct = true;
    document.getElementById("correctAnswer1").className="correctAnswer";
    document.getElementsByClassName("wrongAnswer1").className="wrongAnswer";
  }
  else{
    q2_correct = true;
    document.getElementById("correctAnswer2").className="correctAnswer";
    document.getElementsByClassName("wrongAnswer2").className="wrongAnswer";
  }
  if(q1_correct && q2_correct){

    // to give time for lines 17-18 to execute  
    setTimeout(function() {
      
      // escape the room!
      alert("escape the room!!");
      caveAppear();
    }, 500);
  }
}
function wrongAnswer(){
    alert("wrong Answer");
}  
function caveAppear(){
  document.getElementById("doorImg").style.visibility="visible";
}
function theNextRoom(){
  // ~ add THIS
  if(localStorage.getItem(`alice_question${fairyTaleroomNumber}_answered`) !== "true"){
    alert("You need to answer alice's question before you can leave!");
  }
  else{
    // escape the room!
    window.location.assign("../three_bears/html/zehava.html");

    //just for testing
    localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
  }
  // ~ end of add THIS
}