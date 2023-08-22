const AnswersContainer = ({question, handleAnswerSelect, selectedAnswer}) => {

    const handleSelectOption = function(option){
        handleAnswerSelect(option)
        } 
    
    return (
        <>
        <ul>
            {question.options.map((option, index) => <li key={index}><input name="selectedAnswer" type="radio" value="{option}" checked={option == selectedAnswer} onClick={() => handleSelectOption(option)} />{option}</li>)}
        </ul>
        </>
    )
}

export default AnswersContainer