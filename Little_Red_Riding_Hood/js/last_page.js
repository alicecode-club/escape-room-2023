// ~ Start of js part 1/2 to add. Change:
// 1. relativeLocationToAliceFolder${fairyTaleroomNumber} = your relative location to /alicecode_questions/.
// 2. fairyTaleroomNumber = correct room number (1-6):
//   1: Little red riding hood, 2: Cinderella, 3: Hansel and Gretel, 4: The little mermaid
//   5: Zehava and the three bears, 6: The school for good and evil
let fairyTaleroomNumber = 1;

localStorage.setItem("roomNumber",fairyTaleroomNumber);
localStorage.setItem(`relativeLocationToAliceFolder${fairyTaleroomNumber}`, "../../alicecode_questions/");
// ~ End of js part 1/2 to add
function grandma(){
    alert("The First Number Is 2")
}
function wolf(){
    alert("The Second Number Is 3")
}
function cape(){
    alert("The Third Number Is 8")
}
function book(){
    alert("The Forth Number Is 6")
}
function door(){
    let code=prompt("Enter Code:")
    if (code=="2386"){
        // ~ Start of js part 2/2 to add: Add THIS in the function that lead to the next page
        if(localStorage.getItem(`alice_question${fairyTaleroomNumber}_answered`) !== "true"){
            alert("You need to answer alice's question before you can leave!");
        }
        else{
            // escape the room! = your code of moving to next page
            window.location.assign("../../cinderella/html/cinderella.html")
            //just for testing
            localStorage.removeItem(`alice_question${fairyTaleroomNumber}_answered`);
        }
        // ~ End of js part 2/2 to add
    }
    else{
        alert("Sorry, Try Again...")
    }
}