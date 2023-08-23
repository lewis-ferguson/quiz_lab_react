import React, { useState } from 'react'

const QuizPlan = () => {
    const [questions, setQuestions] = useState([
  {
    question: "What was the name of the first computer virus that spread in the wild?",
    options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
    answer: "Brain"
  },
  {
    question: "Which programming language is often referred to as the 'mother of all languages'?",
    options: ["Java", "C", "Fortran", "Assembly"],
    answer: "C"
  },
  {
    question: "In what year was the company Google founded?",
    options: ["1996", "1998", "2000", "2004"],
    answer: "1998"
  }
]);

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [score, setScore] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState("")

const handleAnswer = () => {
    {questions[currentQuestionIndex].answer == selectedAnswer ? setScore(score + 1): null}
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedAnswer("")
}


  return (
    <>
    <p>Question: {currentQuestionIndex}</p>
    <p>Score: {score}</p>
    {questions[currentQuestionIndex] >= questions.length ? <h1>Hooray, you completed the quiz</h1> 
    : 
    <>
    <h2>{questions[currentQuestionIndex].question}</h2>
    <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
        <li key={index}>
            <label htmlFor='answer'>{option}</label>  
            <input type='radio' name='answer' onChange={() => setSelectedAnswer(option)} checked={selectedAnswer == option}
        />  
        </li>
        ))}
        </ul>
        <button onClick={handleAnswer}>Next</button>
        </>}
    </>
  )
}

export default QuizPlan