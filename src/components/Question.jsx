import '../App.css'

const Question = ({text,currentQuestion,totalQuestions}) => {
    return(
        <div className="question-div">
            <h2>{text}</h2>
            <h2>{`${currentQuestion+1}/${totalQuestions}`}</h2>
        </div>
    )
}

export default Question;