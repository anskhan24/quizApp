// Define an array of objects that store questions and their respective answers
const questions = [
    {
        'ques': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },

    {
        'ques': "What year was JavaScript launched?",
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },

    {
        "ques": "What does CSS stand for?",
        'a': 'Central Style Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Cascading Simple Sheets',
        'd': 'none of the above',
        'correct': 'b'
    }
]

// Initialize variables to keep track of current question, total questions, and number of correct and wrong answers
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

// Get references to HTML elements
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');

// Define a function to load the current question into the HTML elements
const loadQuestion = () => {
    // If we've displayed all the questions, end the quiz
    if (index === total) {
        return endQuiz();
    }
    // Reset the options to clear any previous selections
    reset();
    // Get the current question data
    const data = questions[index];
    // Display the question and answer options
    quesBox.innerHTML = `${index + 1} ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

    console.log(data);
}

// Define a function to check the user's answer and update the score
const submitQuiz = () => {
    // Get the current question data
    const data = questions[index];
    // Get the user's answer
    const ans = getAnswer();
    // If the answer is correct, increment the score
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    // Move to the next question
    index++;
    // Load the next question
    loadQuestion();
    return;
}

// Define a function to get the user's answer
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }   
    )
    return answer;
}

// Define a function to reset the user's answer selection
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }   
    )
}

// Define a function to end the quiz and display the final score
const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style = "text-align: center;">
    <div style = "font-size: 30px;">
    <div style = "color: red;">
    <h3> Thank you for playing!</h3>
    <h3> ${right}/${total} are correct answers</h3>
    `;
}

// Load the first question to start the quiz
loadQuestion();
