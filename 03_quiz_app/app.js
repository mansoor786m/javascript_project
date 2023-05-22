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

let index = 0,
    correct = 0,
    incorrect = 0,
    total = quizData.length;
    

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")



const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }

    reset()
    const data = quizData[index]
    questionBox.innerHTML = `(${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#but").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans == data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()

        console.log(correct);
        console.log(incorrect);
    }
        
    )


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

const quizEnd = () => {
   
    document.getElementsById("box").innerHTML = "hellow"
}
loadQuestion();

// {/* <h2 > Hii, you've scored ${correct} / ${total} </h2> */}


