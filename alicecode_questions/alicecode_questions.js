const alicecode_girl_webp_relative_location = "../alicecode_girl.webp"
const aliceQuestionsJson = '[' +
    '{"question":["Are we going to finish the game on time?","No","Yes we are!"],"multi_flag": true,"answer_number":2},' +
    '{"question":"Which date in March is our event?","answer":"14"},' +
    '{"question":"question3","answer":"answer3"},' +
    '{"question":[' +
        '"Please select your favorite Web language:",' +
        '"CSS",' +
        '"HTML",' +
        '"JS"],' +
        '"multi_flag": true,"answer_number":"3"}' +
']'
const aliceQuestions = JSON.parse(aliceQuestionsJson);

function aliceQuestion(index){
    // index-- because array indexes starts at 0 but it's easier to receive indexing to the room pages starting from 1
    index--;
    if(aliceQuestions[index].multi_flag==true){
        setMultiChoiceQuestionInHtml(aliceQuestions[index].question)   
    }
    else{
        setInputQuestionInHtml(aliceQuestions[index].question)   
    }
    let alicePopup= document.getElementById("alice_popup");
    alicePopup.classList.add("alice_question_popup");
}

function setMultiChoiceQuestionInHtml(question){
    let questionInHtml = `<p>${question[0]}</p>`
    for (let i=1; i<question.length;i++){

        questionInHtml += `<input type="radio" name="alicecode_choices" id="alicecode_choice${i}" value="${question[i]}">` +
        `<label for="alicecode_choice${i}">${question[i]}</label><br><br>`
    }
    document.getElementById("alice_question_in_html").innerHTML = questionInHtml
}

function setInputQuestionInHtml(question){
    let questionInHtml = `<p>${question}</p><br>` +
    '<label for="fname">Your answer:</label><br>'+
    '<input type="text" id="alice_input_answer" name="alice_input_answer"><br><br>'
    document.getElementById("alice_question_in_html").innerHTML = questionInHtml
}


function checkAliceAnswer(index){
    index--;
    if(aliceQuestions[index].multi_flag==true){
        checkAliceMultiChoiceAnswer(index); 
    }
    else{
        checkAliceInputAnswer(index);    
    }
}

function checkAliceMultiChoiceAnswer(index){
    let i = aliceQuestions[index].answer_number
    if(document.getElementById(`alicecode_choice${i}`).checked==true){
        alert("correct!")
        document.getElementById("alice_img").src = alicecode_girl_webp_relative_location; 
        closeAlicePopup();
    }
    else{
        alert("nope. try again!")
    }
}

function checkAliceInputAnswer(index){
    if(document.getElementById('alice_input_answer').value.toLowerCase() === aliceQuestions[index].answer){
        alert("correct!")
        document.getElementById("alice_img").src = alicecode_girl_webp_relative_location; 
        closeAlicePopup();
    }
    else{
        alert("nope. try again!")
    }
}

function closeAlicePopup() {
    let alicePopup= document.getElementById("alice_popup");
    alicePopup.classList.remove("alice_question_popup");
}
