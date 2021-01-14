<<<<<<< HEAD
import React from 'react'

function Answer(props) {
    return (
        <div>
            <button className="btnAnswer" type="button" onClick={ () => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

=======
import React from 'react'

function Answer(props) {
    return (
        <div>
            <button className="btnAnswer" type="button" onClick={ () => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

>>>>>>> 562098727f5a4898bc8eabfccf7287cb51578f5c
export default Answer;