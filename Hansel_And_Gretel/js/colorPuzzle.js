var code_solved=false;

function goBack() {
    window.location.replace("../html/HanselAndGretel.html");
} 

$(document).ready(function(){
    var currentColor = "white";
    var currentBoardCells = ["board40", "board41", "board42", "board43"];
    var currentPegCells = ["peg40", "peg41", "peg42", "peg43"]
    var currentRow = 1;
    var hasWon = false;
    var cell1Color, cell2Color, cell3Color, cell4Color;
    var chose= ["white","white","white","white"];
    //dictionary of colors
    var colors = {
        "rgb(0, 128, 0)": "green",
        "rgb(255, 255, 0)": "yellow",
        "rgb(255, 0, 0)": "red",
        "rgb(0, 0, 255)": "blue",
        "rgb(255, 192, 203)": "pink",
        "rgb(255, 165, 0)": "orange"
    }

    //create the random color code
    var code = [
        "blue", 
        "blue",
        "red",
        "green"
    ];
    
    console.log(code);

    //create the cells and add them to the board
    for(let i = 0; i < 4; i++){
        let cell1 = document.createElement("div");
        cell1.setAttribute("type", 'div');
        cell1.setAttribute("id",i);
        cell1.setAttribute("class","boardCell");
        $(".board").append(cell1);
    }
        //create cells for the pegs
        for(let i = 0; i < 4; i++){
            let cell = "<div class=\"pegCell\" id=peg"+i+"></div>"
            $(".pegs").append(cell);
        }

    //change the style of the board so you can view the rows
    $(".board").css("grid-template-rows", "repeat(11,73.18px)");
    $(".board").css("grid-template-columns", "repeat(4,73.18px)");
    $(".board").css("position", "fixed");
    $(".board").css("width", "20%");
    $(".board").css("height", "10%");


    //add colors to the color board
    $(".color").each(function(){
        //set the color of the cell to its ID
        let color = $(this).attr("id");
        $(this).css("background-color", color);
    });

    //change the current color when the user clicks on the color board
    $(".color").click(function(){
        let color = $(this).attr("id");
        currentColor = color;
        $(".currentColor").css("background-color", color);
    });

    //change the color of a board cell on click
    $(".boardCell").click(function(){
        var id = $(this).attr("id");
            $(this).css("background-color", currentColor);
            chose[id]=currentColor;
         console.log(chose);   
    });

    //do actions when the submit button is clicked
    $(".submit").click(function(){
        updatePegs();
        checkWin();
        changeCurrentRow();
    });

    //change the valid board cells to click on
    function changeCurrentRow(){
        currentRow -= 1;
        var mult = 4;

        currentBoardCells = [
            "board" + (currentRow*mult-4), 
            "board" + (currentRow*mult-3), 
            "board" + (currentRow*mult-2), 
            "board" + (currentRow*mult-1)];
        currentPegCells = [
            "peg" + (currentRow*mult-4), 
            "peg" + (currentRow*mult-3), 
            "peg" + (currentRow*mult-2), 
            "peg" + (currentRow*mult-1)];
    }

    //check if the player has won
    function checkWin(){
        if(code[0]==chose[0] && code[1]==chose[1] && code[2]==chose[2] && code[3]==chose[3]){
            hasWon = true;
            code_solved=true;
            console.log(code_solved);
            alert("Congratulations, you have won!");
            //set the colors of the code box
            $("#secretColor1").css("background-color", code[0]);
            $("#secretColor2").css("background-color", code[1]);
            $("#secretColor3").css("background-color", code[2]);
            $("#secretColor4").css("background-color", code[3]);
            localStorage.setItem("code_solved",true);
            window.location.replace("../html/HanselAndGretel.html");
        }
        else {
            alert("wrong!")
        }
        return hasWon; 
    }

    //change the pegs depending on the cell colors
    function updatePegs(){
        let cell1 = $("#"+currentBoardCells[0]);
        let cell2 = $("#"+currentBoardCells[1]);
        let cell3 = $("#"+currentBoardCells[2]);
        let cell4 = $("#"+currentBoardCells[3]);

        cell1Color = colors[cell1.css("background-color")];
        cell2Color = colors[cell2.css("background-color")];
        cell3Color = colors[cell3.css("background-color")];
        cell4Color = colors[cell4.css("background-color")];

        let peg1 = $("#"+currentPegCells[0]);
        let peg2 = $("#"+currentPegCells[1]);
        let peg3 = $("#"+currentPegCells[2]);
        let peg4 = $("#"+currentPegCells[3]);

        let pegs = [peg1, peg2, peg3, peg4];

        //array of pegs that have been filled
        let filledPegs = [];
        //array of cells that have already been accounted for
        let chosenCells = [];
        //create copy of the code array
        let codeCopy = [...code];

        //if the colors are in the correct positions, 
        //  change the pegs to red
        if(code[0] === cell1Color){
            //choose a random peg that has not yet been filled
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

            //remove the color from codeCopy because it has
            //  already been accounted for
            let index = codeCopy.indexOf(cell1Color);
            if(index > -1){
                codeCopy.splice(index, 1);
            }

            //add number to choseCells to state that this cell
            //  has now been accounted for
            chosenCells.push(1);

        }
        if(code[1] === cell2Color){
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

            //remove the color from codeCopy because it has
            //  already been accounted for
            let index = codeCopy.indexOf(cell2Color);
            if(index > -1){
                codeCopy.splice(index, 1);
            }

            chosenCells.push(2);

        }
        if(code[2] === cell3Color){
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

            //remove the color from codeCopy because it has
            //  already been accounted for
            let index = codeCopy.indexOf(cell3Color);
            if(index > -1){
                codeCopy.splice(index, 1);
            }

            chosenCells.push(3);


        }
        if(code[3] === cell4Color){
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

            //remove the color from codeCopy because it has
            //  already been accounted for
            let index = codeCopy.indexOf(cell4Color);
            if(index > -1){
                codeCopy.splice(index, 1);
            }

            chosenCells.push(4);


        }

        
        //if the code copy includes the colors of the four cells
        //  then change the pegs to white because the code copy
        //  now only includes colors that have not been accounted
        //  for
        if(codeCopy.includes(cell1Color) && !chosenCells.includes(1)){
            //choose a random peg that has not yet been filled
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

        }       
        if(codeCopy.includes(cell2Color) && !chosenCells.includes(2)){
            //choose a random peg that has not yet been filled
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

        }    
        if(codeCopy.includes(cell3Color) && !chosenCells.includes(3)){
            //choose a random peg that has not yet been filled
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

        }    
        if(codeCopy.includes(cell4Color) && !chosenCells.includes(4)){
            //choose a random peg that has not yet been filled
            let num = randomNum14(filledPegs);
            filledPegs.push(num);

        }   
    }


});