const quizData = [
    {
        question: 'Quem foi o primeiro presidente de Angola?',
        a: 'Jonas Savimbi',
        b: 'José Eduardo dos Santos',
        c: 'Antonio Agostinho Neto',
        d: 'Holden Roberto',
        correct: 'c'
    },

    {
        question: 'Quem foi o criador da linguagem Javascrpt?',
        a: 'Guido van Rossum',
        b: 'Brendan Eich',
        c: 'James Gosling',
        d: 'Tim Berners-Lee',
        correct: 'b'
    },

    {
        question: 'Em que ano foi lançado a linguagem Javascript?',
        a: '1995',
        b: '1972',
        c: '1991',
        d: '2002',
        correct: 'a'
    },

    {
        question: 'Qual desses não é um framework do Javascript?',
        a: 'AngularJS',
        b: 'Vue.js',
        c: 'Django',
        d: 'Ember.js',
        correct: 'c'
    },

    {
        question: 'Qual desses não é uma biblioteca do Javascript?',
        a: 'jQuery',
        b: 'Babel',
        c: 'Glimmer.js',
        d: 'Hosting',
        correct: 'd'
    },

    {
        question: 'Em que ano foi lançado a primeira versão do CSS?',
        a: '1996',
        b: '1986',
        c: '2000',
        d: '2004',
        correct: 'a'
    },

    {
        question: 'O que significa JSON?',
        a: 'JavaScript Object Oriented',
        b: 'JavaScript Object Notation',
        c: 'Extensible Markup Language',
        d: 'JavaServer Pages',
        correct: 'b'
    },

    {
        question: 'O que significa HTTP?',
        a: 'Hypertext Preprocessor ',
        b: 'Hypertext Transfer Protocol',
        c: 'Extensible Markup Language',
        d: 'HyperText Markup Language',
        correct: 'b'
    },

    {
        question: 'O que é Git?',
        a: 'É um sistema de controle de versões distribuído',
        b: 'É um núcleo monolítico de código aberto para sistemas operacionais tipo UNIX',
        c: 'É uma plataforma de hospedagem de código-fonte',
        d: 'É um programa que permite que os usuários digitem comandos de texto',
        correct: 'a'
    },

    {
        question: 'O que significa OOP?',
        a: 'Structured Query Language',
        b: 'JavaScript Object Oriented',
        c: 'PHP Object Oriented',
        d: 'Object Oriented Programming',
        correct: 'd'
    }
];

const quizContainer = document.querySelector('.quiz-container')

const question = document.getElementById('question');

const ansewrsList = document.getElementById('answersList');
const answers = document.querySelectorAll('.answer');

const answerA = document.querySelector('.a_text');
const answerB = document.querySelector('.b_text');
const answerC = document.querySelector('.c_text');
const answerD = document.querySelector('.d_text');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    if(currentQuestion < quizData.length) {
        const currentQuizData = quizData[currentQuestion];

        question.innerText = currentQuizData.question;
    
        answerA.innerText = currentQuizData.a;
        answerB.innerText = currentQuizData.b;
        answerC.innerText = currentQuizData.c;
        answerD.innerText = currentQuizData.d;

    } else {
        ansewrsList.style.display = 'none';

        const h3 = document.createElement('h3');
        h3.innerText = 'Score';
        
        const span = document.createElement('span');
        span.setAttribute("class", "score")
        span.innerText = score;

        quizContainer.appendChild(h3);
        quizContainer.appendChild(span);
    }



}

function checkAnser(event) {

    const currentQuizData = quizData[currentQuestion];

    if (event.target.id === currentQuizData.correct) {
        event.target.style.backgroundColor = 'green';
        score += 10;        
    } else {
        event.target.style.backgroundColor = 'red';
        answers.forEach(answer => {
            if (answer.children[0].id === currentQuizData.correct) {
                answer.children[0].style.backgroundColor = 'green';
            }
        });
    }
    
    currentQuestion ++;
    
    setTimeout( () => {
        answers.forEach(answer => {
            answer.children[0].style.backgroundColor = '#654062';
        });
        loadQuiz();
    }, 1500);
}
