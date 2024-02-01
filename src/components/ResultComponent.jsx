import './style.css'

function ResultComponent(){
    return <div className="full"> 
        <div> 
        <div>
        <h1 className="reshead">Result</h1>
        <div className="entire">
            <h3>You need more practice!</h3>
            <h1>Your score is 20%</h1>
            <div className="flex">
                <p>Total number of questions</p> 
                <p>15</p>
            </div>
            <div className="flex">
                <p>Number of attempted questions</p>
                <p>9</p>
            </div>
            <div className="flex">
                <p>Number of correct answers</p>
                <p>3</p>
            </div>
            <div className="flex">
                <p>Number of wrong answers</p>
                <p>6</p>
            </div>
        </div>
        <div className="btns">
            <button className="btn1">Play again</button>
            <button className="btn2">Back to home</button>
        </div>
    </div>
    </div>
    </div>
}

export default ResultComponent;