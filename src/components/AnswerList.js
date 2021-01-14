<<<<<<< HEAD
import React from 'react'
import Answer from './Answer';

function AnswerList(props) {
    const options = [];
    for(let i=0;i<props.dataSet.options.length;i++) {
        options.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.options[i]}/>)
    }
    return (
        <div>
            {options}
        </div>
    )
}

export default AnswerList
=======
import React from 'react'
import Answer from './Answer';

function AnswerList(props) {
    const options = [];
    for(let i=0;i<props.dataSet.options.length;i++) {
        options.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.options[i]}/>)
    }
    return (
        <div>
            {options}
        </div>
    )
}

export default AnswerList
>>>>>>> 562098727f5a4898bc8eabfccf7287cb51578f5c
