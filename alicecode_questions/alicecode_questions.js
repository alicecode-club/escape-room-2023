

const roomNumber = localStorage.getItem("roomNumber");
console.log("roomNumber is: "+ roomNumber);
const relativeLocationToAliceFolder = localStorage.getItem(`relativeLocationToAliceFolder${roomNumber}`)?
                                      localStorage.getItem(`relativeLocationToAliceFolder${roomNumber}`) :
                                      "../alicecode_questions/" //default location
                                      
console.log("relativeLocation is: " + relativeLocationToAliceFolder);
console.log("question answered is: " + localStorage.getItem(`alice_question${roomNumber}_answered`));

(function($) {
    $(document).ready(function() {
        if(localStorage.getItem(`alice_question${roomNumber}_answered`)){
            document.getElementById("alice_img").src = relativeLocationToAliceFolder + "alicecode_girl.webp"; 
        }
    });
})(jQuery);

const aliceQuestionsJson = '[' +
    '{"question":[' + 
        '"Which woman won the Nobel Prize in Physics in 1903 for her contribution to the understanding of radiation?",' +
        '"Marie Curie",' +
        '"Rosalind Franklin",' +
        '"Lise Meitner",' +
        '"Barbara McClintock"],' +
        '"multi_flag": true, "answer_number":1},' +
    '{"question":"Two people, Dony and Tony, were under police investigation. The police are aware that only one of them can tell the truth and one can lie. During the investigation Tony says: ~we are both liars~. Who is telling the truth?","answer":"Dony"},' +
    '{"question":[' + 
        '"Who is the only woman to have received, by herself (unshared), a Nobel Prize for Medicine?",' +
        '"Rosalyn Sussman Yalow",' +
        '"Gerty Theresa Cori",' +
        '"Barbara McClintock",' +
        '"Rita Levi-Montalcini"],' +
        '"multi_flag": true, "answer_number":3},' +
    '{"question":[' +
        '"Who developed the signal flares that are still used by the U.S. Navy?",' +
        '"Esther Conwell",' +
        '"Beulah Louise Henry",' +
        '"Beatrice Hicks",' +
        '"Martha Coston"],' +
        '"multi_flag": true,"answer_number":4},' +
    '{"question": "Two tribes live on the island of true and false. One tribe only speaks the truth and the other only lies. Upon your arrival to the island you meet a girl, a woman and a man. <br>The girl says: ~If two of the adults speak the truth, then I am telling lies~. <br>Which tribe is the girl from?",' +
    '"answer":"True"},' +
    '{"question":[' +
        '"Who invented signal hopping, which was a precursor to wi-fi, GPS, and bluetooth?",' +
        '"Hertha Ayrton",' +
        '"Emily Warren Roebling",' +
        '"Edith Clark",' +
        '"Hedy Lamar"],' +
        '"multi_flag": true,"answer_number":4}' +
']'
const aliceQuestions = JSON.parse(aliceQuestionsJson);

function aliceQuestion(){
    // array indexes starts at 0 but it's easier to receive indexing to the room pages starting from 1
    index = roomNumber - 1;
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
    let questionInHtml = `<h2 id="alice_h1">Alice's Question:</h2>`
    questionInHtml += `<p id="alice_p">${question[0]}</p>`
    for (let i=1; i<question.length;i++){

        questionInHtml += `<input type="radio" name="alicecode_choices" id="alicecode_choice${i}" value="${question[i]}">` +
        `<label for="alicecode_choice${i}">${question[i]}</label><br><br>`
    }
    document.getElementById("alice_question_in_html").innerHTML = questionInHtml
}

// I have a bug here, this doesn't look good
function setInputQuestionInHtml(question){
    let questionInHtml = `<h2 id="alice_h1">Alice's Question:</h2>`
    questionInHtml += `<p>${question}</p><br>` +
    '<label for="fname">Your answer:</label><br>'+
    '<input type="text" id="alice_input_answer" name="alice_input_answer"><br><br>'
    document.getElementById("alice_question_in_html").innerHTML = questionInHtml
}


function checkAliceAnswer(){
    index = roomNumber - 1;
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
        correctAnswerActions();
    }
    else{
        alert("nope. try again!")
    }
}

function checkAliceInputAnswer(index){
    if(document.getElementById('alice_input_answer').value.toLowerCase() === aliceQuestions[index].answer.toLowerCase()){
        correctAnswerActions();
    }
    else{
        alert("nope. try again!")
    }
}

function correctAnswerActions(){
    alert("correct!");
    localStorage.setItem(`alice_question${roomNumber}_answered`, "true");
    document.getElementById("alice_img").src = relativeLocationToAliceFolder + "alicecode_girl.webp"; 
    closeAlicePopup();
}

function closeAlicePopup() {
    let alicePopup= document.getElementById("alice_popup");
    alicePopup.classList.remove("alice_question_popup");
}
