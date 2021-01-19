//Data for the quiz
const quizData = [
{
    question: 'How old is Tracy?',
    a: '10',
    b: '17',
    c: '26',
    d: '100',
    correct: 'c'
}, {
    question: 'What is Tracy\'s favorite ice cream?',
    a: 'Chocolate',
    b: 'Vanilla',
    c: 'Strawberry',
    d: 'Banana',
    correct: 'a'
}, {
    question: 'Where did Tracy study web development?',
    a: 'UTSA',
    b: 'Harvard',
    c: 'Codeup',
    d: 'YouTube',
    correct: 'C'
}, {
    question: 'What is Tracy\'s favorite coding language?',
    a: 'Java',
    b: 'Python',
    c: 'Javascript',
    d: 'HTML',
    correct: 'b'
}
]

//Getting elements to pass them through function
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

//initialize questions to start at 0 index from data array
let currentQuestion = 0;

//run loadQuiz function
loadQuiz();

//function to fill in question data and serve questions 
function loadQuiz(){

    //get quizdata at the x index
    const currentQuizData = quizData[currentQuestion];

    //set innerText for elements within question
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // //increase current question to next index - removed because currentQuestion now increases with the submitBtn click
    // currentQuestion++;
}

//event listener for submit button to continue to next index
submitBtn.addEventListener("click", () => {
    currentQuestion++;

    //if the index of the current question is less than the final index, keep going
    if (currentQuestion < quizData.length){
        loadQuiz();
        console.log(currentQuestion);

    //if not show this alert    
    } else {
        alert("You have finished the quiz! Congratlations.")
    }
});