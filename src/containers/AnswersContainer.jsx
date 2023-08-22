const AnswersContainer = ({question, handleAnswerSelect}) => {

    const handleSelectOption = function(option){
        handleAnswerSelect(option)
        } 
    
    return (
        <>
        <ul>
            {question.options.map((option) => <li><input name="selectedAnswer" type="radio" value="{option}" onClick={() => handleSelectOption(option)} />{option}</li>)}
        </ul>
        </>
    )
}

export default AnswersContainer