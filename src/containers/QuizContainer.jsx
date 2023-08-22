import { useState } from 'react';
import Question from '../components/Question'
import AnswersContainer from './AnswersContainer';
import Score from '../components/Score'

const Quiz = () => {
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

     //currentQuestionIndex State
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
     const [score, setScore] = useState(0)
     const [selectedAnswer, setSelectedAnswer] = useState("")



    const handleAnswerSelect = (selectedAnswer) => {
        // const currentQuestion = questions.filter((question) => question.answer == selectedAnswer)
        const currentQuestion = questions[currentQuestionIndex]

        {currentQuestion.answer == selectedAnswer ? setScore((score+1)): null}

        setCurrentQuestionIndex(currentQuestionIndex+1)
        //using ++ to increment mutates the state

        //reset the radio button value
        setSelectedAnswer("")
        

    }

    return (
        <>
        <Score score={score}/> 
        <Question question={questions[currentQuestionIndex]}/>
        <AnswersContainer question = {questions[currentQuestionIndex]} handleAnswerSelect={handleAnswerSelect}/>
        

        </>

        //get the question to display
        //<Question question ={} options={} handleAnswerSelect{} />

    )
}

export default Quiz