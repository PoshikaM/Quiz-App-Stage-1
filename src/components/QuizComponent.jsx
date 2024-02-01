import './style.css'

function QuizComponent(){
    return <div className="whole"> 
        <div className="quizfull">
        <h1 className="heading">Question</h1>
        <p className="questionNum">1 of 15</p>
        <p className="question">What is the only mammal that can jump?</p>
        <div className="buttons">
            <button className="btn">Dog</button>
            <button className="btn">Elephant</button>
            <button className="btn">Goat</button>
            <button className="btn">Lion</button>
        </div>
        <div className="gamebtn">
            <button className="prevbtn">Previous</button>
            <button className="nextbtn">Next</button>
            <button className="quitbtn">Quit</button>
        </div>
    </div> 
    </div>
}

export default QuizComponent;