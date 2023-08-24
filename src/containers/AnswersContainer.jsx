const AnswersContainer = ({question, handleAnswerSelect, selectedAnswer}) => {

    const options = [...question.incorrect_answers, question.correct_answer].sort()
    //creating 1 list of all possible answers as the api has 2 seperate lists, incorrect answers and correct answer

    const handleSelectOption = function(option){
        handleAnswerSelect(option)
        } 
    
    return (
        <>
        <ul>
            {options.map((option, index) => <li key={index}><input name="selectedAnswer" type="radio" value="{option}" checked={option == selectedAnswer} onClick={() => handleSelectOption(option)} />{option}</li>)}
        </ul>
        </>
    )
}

export default AnswersContainer