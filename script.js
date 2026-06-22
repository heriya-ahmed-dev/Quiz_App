const data = [
    {   
        quesNum: '1',
        question:'1.How to define the function in python',
        option1 :'A. def',
        option2:'B. func',
        option3 :'C. define',
        option4 :'D. function',
        answer : 'A. def'

    },
     {  
        quesNum: '2',
        question:'What is the output of print(2 ** 3)?',
        option1 :'A. 6',
        option2:'B. 9',
        option3 :'C. 8',
        option4 :'D. 5',
        answer : 'C. 8'

    },
     {
        quesNum: '3',
        question:' Which data type is immutable?',
        option1 :'A. list',
        option2:'B. dictionary',
        option3 :'C. set',
        option4 :'D. tuple',
        answer : 'D. tuple'

    },
     {
        quesNum: '4',
        question:'Which method adds an item to the end of a list in Python?',
        option1 :'A. add()',
        option2:'B. pop()',
        option3 :'C. insert()',
        option4 :'D. append()',
        answer : 'D. append()'

    },
     {
        quesNum: '5',
        question:'Which keyword is used to create a class in Python?',
        option1 :'A. object',
        option2:'B. class',
        option3 :'C. define',
        option4 :'D. sttruct',
        answer : 'B. class'

    }
]

let currentQuestionIndex = 0
let score = 0


function showQuestion (){
      q = data[currentQuestionIndex];
      document.getElementById('Ques').innerHTML = q.question
      document.getElementById('opt1').innerHTML = q.option1
      document.getElementById('opt2').innerHTML = q.option2
      document.getElementById('opt3').innerHTML = q.option3
      document.getElementById('opt4').innerHTML = q.option4
      document.getElementById('QuesNum').innerHTML = q.quesNum
      
      

}

showQuestion()
function SelectedAns(button){
    let correctAns = data[currentQuestionIndex].answer

    if (button.innerHTML.trim() == correctAns){
        button.style.backgroundColor = 'green'
        score ++
    }
    else{
        button.style.backgroundColor = 'red'
    }
}


function showResult(){
    document.getElementById('quizBox').style.display = 'none'
    document.getElementById('resultBox').style.display = 'block'
    document.getElementById('score').innerHTML = `Your Score is : ${score}/${data.length}`
}



function nextQuestion(){

    currentQuestionIndex++
    document.getElementById('opt1').style.backgroundColor = ''
    document.getElementById('opt2').style.backgroundColor = ''
    document.getElementById('opt3').style.backgroundColor = ''
    document.getElementById('opt4').style.backgroundColor = ''
    if (currentQuestionIndex < data.length ){
       showQuestion()
    }
    else{
        showResult()
    }

}
function prevQuestion (){
    currentQuestionIndex --
    
    if (currentQuestionIndex >= 0){
        showQuestion()
    }
}

document.getElementById('next').addEventListener('click',nextQuestion)
document.getElementById('prev').addEventListener('click',prevQuestion)

document.querySelectorAll('.option').forEach(btn =>{
    btn.style.backgroundColor = ''
})

function RestartQuiz(){
    document.getElementById('quizBox').style.display = 'block'
    document.getElementById('resultBox').style.display = 'none'
    score = 0
    currentQuestionIndex = 0
    showQuestion()
}

