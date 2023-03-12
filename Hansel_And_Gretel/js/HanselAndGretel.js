let degreesPuzzle=false;
let cagePuzzle=false;

// ~ Start of js part 1/2 to add. Change:
// 1. relativeLocationToAliceFolder${fairyTaleroomNumber} = your relative location to /alicecode_questions/.
// 2. fairyTaleroomNumber = correct room number (1-6):
//   1: Little red riding hood, 2: Cinderella, 3: Hansel and Gretel, 4: The little mermaid
//   5: Zehava and the three bears, 6: The school for good and evil
let fairyTaleroomNumber = 3;

localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../../alicecode_questions/");
// ~ End of js part 1/2 to add


function exit() {
    code_solved= localStorage.getItem("code_solved");
    console.log(code_solved);
    if (code_solved==null) {
        alert("you have to solve the puzzle first")
        window.location.replace("../html/colorPuzzleV2.html");
    }
    else {
        // ~ Start of js part 2/2 to add: Add THIS in the function that lead to the next page
        if(localStorage.getItem(`alice_question${fairyTaleroomNumber}_answered`) !== "true"){
            alert("You need to answer alice's question before you can leave!");
        }
        else{
            // escape the room! = your code of moving to next page
            localStorage.removeItem("code_solved");
            alert("you escaped!");
            window.location.assign("../../the_little_mermaid/one.littel.html");

            //just for testing
            localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
        }
        // ~ End of js part 2/2 to add
    }
}

function oven(){
    if (degreesPuzzle==false) {
        alert("the oven is now on!");
        var imgReplace = document.getElementsByClassName("myImg")[0];
        imgReplace.src = "../media/oven_on.png";
        degreesPuzzle=true; 
    }
}

function cage() {
    if (cagePuzzle==false) {
        alert ("Hansel: I'm too scared! Unlock the cage and maybe I will remember something");
        popUp();
    }
    if (cagePuzzle==true){
        alert ("Hansel: You already forgot? the candies that were above the door were blue, blue, red, green.");
    }
}

function popUp() {
    let pop= document.getElementById("pop");
    pop.classList.add("popUp");
}

function popDown() {
    let pop= document.getElementById("pop");
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
        document.getElementById("hansel").classList.add("hansel2");
        setTimeout(function(){
			alert ("Hansel: Thank you! I remember now! the candies that were above the door were blue, blue, red, green.");
            
   		}, 1);
    }
    else {
        alert ("wrong code try again");
    }
}

function hansel() {
    if (cagePuzzle==true){
        alert ("Hansel: You already forgot? the candies that were above the door were blue, blue, red, green.");
    }
}
