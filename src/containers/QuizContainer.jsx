import { useEffect, useState } from 'react';
import Question from '../components/Question'
import AnswersContainer from './AnswersContainer';
import Score from '../components/Score'
import Reset from '../components/Reset';



const Quiz = () => {
    const [questions, setQuestions] = useState([])

    useEffect(() =>{
      fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple").then(res => res.json()).then(data => setQuestions(data.results))
    }, [])
    

//   {
//     question: "What was the name of the first computer virus that spread in the wild?",
//     options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
//     answer: "Brain"
//   },
//   {
//     question: "Which programming language is often referred to as the 'mother of all languages'?",
//     options: ["Java", "C", "Fortran", "Assembly"],
//     answer: "C"
//   },
//   {
//     question: "In what year was the company Google founded?",
//     options: ["1996", "1998", "2000", "2004"],
//     answer: "1998"
//   }
// ]);

     //currentQuestionIndex State
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
     const [score, setScore] = useState(0)
     const [selectedAnswer, setSelectedAnswer] = useState("")



    const handleAnswerSelect = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex]

        {currentQuestion.correct_answer == selectedAnswer ? setScore((score+1)): null}
        // setTimeout({currentQuestion.correct_answer == selectedAnswer ? <p>Correct</p>: <p>Incorrect!</p>})

        

        //if the answer that is selected is equal to the correct answer, add 1 to the score, otherwise do nothing

        setCurrentQuestionIndex(currentQuestionIndex+1)
        //using ++ to increment mutates the state

        //reset the radio button value, modify the state
        setSelectedAnswer(selectedAnswer)
        

    }

    if (questions.length == 0){
    return (
      <h1>Loading</h1>
    )
    }

    return (
        <>
        <Score score={score}/>
        { currentQuestionIndex >= questions.length ? <Reset/>: <>
        <h3>Question {currentQuestionIndex + 1} of {questions.length}</h3>
        <Question question={questions[currentQuestionIndex]}/>
        <AnswersContainer selectedAnswer = {selectedAnswer} question = {questions[currentQuestionIndex]} handleAnswerSelect={handleAnswerSelect}/>
        </>} 
        
        

        </>

        //get the question to display
        //<Question question ={} options={} handleAnswerSelect{} />

    )
}

export default Quiz