import './../index.scss';

function Result({correctAnswer, questions, refresh}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Ви вгадали {correctAnswer} відповіді з {questions.length}</h2>
            <button onClick={refresh}>Спробувати знову</button>
        </div>
    );
}

export default Result;