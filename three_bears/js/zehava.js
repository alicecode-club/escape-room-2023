// ~ Start of js part 1/2 to add. Change:
// 1. relativeLocationToAliceFolder${fairyTaleroomNumber} = your relative location to /alicecode_questions/.
// 2. fairyTaleroomNumber = correct room number (1-6):
//   1: Little red riding hood, 2: Cinderella, 3: Hansel and Gretel, 4: The little mermaid
//   5: Zehava and the three bears, 6: The school for good and evil
let fairyTaleroomNumber = 5;

localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../../alicecode_questions/");
// ~ End of js part 1/2 to add 
function add_green_border(){
    // to give time for elements to load  
    setTimeout(function() { 
        if(localStorage.getItem("answer1")){
            document.getElementById("q1img").style.border="4px solid green";
        }
        if(localStorage.getItem("answer2")){
            document.getElementById("q2img").style.border="4px solid green";
        }
        if(localStorage.getItem("answer3")){
            document.getElementById("q3img").style.border="4px solid green";
        }
    }, 500);
}
function check_all_answered(){
    if (localStorage.getItem("answer1") && localStorage.getItem("answer2") && localStorage.getItem("answer3")) {
   
        // to give time to load  
        setTimeout(function() {
        
            // escape the room!
            alert("Congratulations! You answered all the questions correctly!");
            doorAppear();
            }, 1000);
    }
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
        window.location.assign("../../the_school_for_good_and_evil/openingScreenIndex")

        //just for testing
        localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
        
        localStorage.removeItem("answer1");
        localStorage.removeItem("answer2");
        localStorage.removeItem("answer3");
    }
    // ~ End of js part 2/2 to add
}

add_green_border()
check_all_answered()