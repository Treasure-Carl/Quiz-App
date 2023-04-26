const questions =[{
    question: "Which is largest the largest animal in the world?", 
    ansers:[
        {text: "Shark", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false}
        
    ]
   },
   {
    question: "Which is largest the smallest country in the world?", 
    ansers:[
        {text: "vatician City", correct: true},
        {text: "Bhutan", correct: false},
        {text: "Nepal", correct: false},
        {text: "shri Lanka", correct: false}
        
    ]
   },
   {
    question: "Which is largest the largest desert in the world?", 
    ansers:[
        {text: "Kalahari", correct: false},
        {text: "Gobi", correct: false},
        {text: "Sahara", correct: false},
        {text: "Antarctica", correct: true}
        
    ]
   },
   {
    question: "Which is largest the smallest continent in the world?", 
    ansers:[
        {text: "Asia", correct: false},
        {text: "Australia", correct: true},
        {text: "Arctic", correct: false},
        {text: "GAfrica", correct: false}
        
    ]
   }

]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
// Showing the questions and answers in in one page
function showQuestion(){
resetState()
let currentQuestion = questions[currentQuestionIndex]
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.ansers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
    button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
})
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstElementChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    // this array checks each button if the answer is true it would give the correct color and vice vasa and dissable that button instantly
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
       
    })
   nextButton.style.display = "block";
}
function showScore(){
   resetState(); 
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        StartQuiz();
    }
})
StartQuiz();