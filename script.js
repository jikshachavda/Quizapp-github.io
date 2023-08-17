const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const Submit = document.querySelector('#Submit')
const Answers = document.querySelectorAll('.answers')
const shoescore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0

const loadQuestion = () =>{
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    Answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer
}

const deselectAll =()=>{
    Answers.forEach((curAnsElem) =>{
        curAnsElem.checked = false
    })
}

Submit.addEventListener('click' , () =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer)

    if(checkAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        shoescore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length} ✌️ </h3>
       <button class= "btn" onclick="location.reload()"> play Again</button> `

       shoescore.classList.remove('scoreArea')

    }
})

