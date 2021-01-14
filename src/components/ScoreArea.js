<<<<<<< HEAD
import React from 'react'
import TotalCorrect from './TotalCorrect'
import TotalIncorrect from './TotalIncorrect'

function ScoreArea(props) {
    return (
        <div className="scoreWrapper">
            <h2>Score Area</h2>
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

=======
import React from 'react'
import TotalCorrect from './TotalCorrect'
import TotalIncorrect from './TotalIncorrect'

function ScoreArea(props) {
    return (
        <div className="scoreWrapper">
            <h2>Score Area</h2>
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

>>>>>>> 562098727f5a4898bc8eabfccf7287cb51578f5c
export default ScoreArea