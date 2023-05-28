const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},

{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let total = quizData.length;
let correct = 0;
let incorrect = 0;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll(".option")


const loadQuestion = () => {
    if (total === index) {
        return endQuiz()
    }

    reset()
    const data = quizData[index]
    questionBox.innerHTML = `(${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}

const submit = () => {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();

    console.log(correct , incorrect)
    return;
}


const getAnswer = () => {
    let Ans;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                Ans = input.value;
            }
        }
    )
    return Ans;

}

const reset = () => {
    allInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {

    document.getElementsById("box").innerHTML = `hellow`
}

loadQuestion();




