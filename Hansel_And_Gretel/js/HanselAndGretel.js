let colorPuzzle=false;
let degreesPuzzle=false;

function exit() {
    if (code_solved==false) {
        alert("you have to solve the puzzle first")
        window.location.replace("../html/colorPuzzle.html");
        
    }
    if (code_solved==true){
        alert("you escaped!");
    }
}