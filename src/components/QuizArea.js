<<<<<<< HEAD
import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';

function QuizArea(props) {
    if(props.isFinished) {
        return <UserGreeting />
    }
    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default QuizArea
=======
import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';

function QuizArea(props) {
    if(props.isFinished) {
        return <UserGreeting />
    }
    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default QuizArea
>>>>>>> 562098727f5a4898bc8eabfccf7287cb51578f5c
