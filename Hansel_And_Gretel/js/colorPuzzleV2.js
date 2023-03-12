var code_solved = false;
var currentColor = "rgb(0, 0, 0)"

var colors = {
    "green": "rgb(0, 128, 0)",
    "yellow" : "rgb(255, 255, 0)",
    "red": "rgb(255, 0, 0)",
    "blue": "rgb(0, 0, 255)",
    "pink": "rgb(255, 192, 203)",
    "orange": "rgb(255, 165, 0)"
}
var BLUE = "rgb(0, 0, 255)"
var RED = "rgb(255, 0, 0)"
var GREEN = "rgb(0, 128, 0)"
var secret_combo = [ BLUE, BLUE, RED, GREEN]

function goBack() {
    window.location.replace("../html/HanselAndGretel.html");
} 

function pickColor(color_name){
    console.log(colors[color_name]);
    currentColor = colors[color_name];
    document.getElementById('currentColor').style.backgroundColor = colors[color_name];
}

function paint(secretColorId){
    document.getElementById(secretColorId).style.backgroundColor = currentColor;
}

function checkCode(){
        let secretColor1 = document.getElementById("secretColor1").style.backgroundColor
        let secretColor2 = document.getElementById("secretColor2").style.backgroundColor
        let secretColor3 = document.getElementById("secretColor3").style.backgroundColor
        let secretColor4 = document.getElementById("secretColor4").style.backgroundColor
        
        if(secret_combo[0]==secretColor1 && secret_combo[1]==secretColor2 && secret_combo[2]==secretColor3 && secret_combo[3]==secretColor4){
            code_solved=true;
            console.log(code_solved);
            alert("Congratulations, you have won!");
            localStorage.setItem("code_solved",true);
            window.location.replace("../html/HanselAndGretel.html");
        }
        else {
            alert("wrong!")
        }
}
