import { useState } from 'react';
import './../index.scss';


function Game({questions, step, selectAnswer}) {
    let arrVaria = questions[step].variants;
    let procenat = Math.round(step / questions.length * 100)
    return (
        <>
            <div className="progress">
                <div style={{ width: `${procenat}%` }} className="progress__inner"></div>
            </div>
            <h1>{questions[step].title}</h1>
            <ul>
                {
                    arrVaria.map((data, index) => (<li onClick={() => selectAnswer(index)}>{data}</li>))
                }
            </ul>
        </>
    );
}
export default Game;