import React, { Component, useState } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      question: null,
      currentQuestion: 0,
      showScore: false,
      score: 0,
      index: 0
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/api/index')
        .then(res=>res.json())
        .then(data=>this.setState({message:data.message}));
    fetch('http://localhost:3001/api/')
        .then(res=>res.json())
        .then(data=>this.setState({questions:data.results}))
        .then(data=>this.setState({counts:data.count}));
  }

  render(){
    const questions = [
      {
        questionText: this.setState.questions,
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
        ],
      },
      {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
          { answerText: 'Jeff Bezos', isCorrect: false },
          { answerText: 'Elon Musk', isCorrect: true },
          { answerText: 'Bill Gates', isCorrect: false },
          { answerText: 'Tony Stark', isCorrect: false },
        ],
      },
      {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
      {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: true },
        ],
      },
    ];
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        this.setState({score:this.state.score+1});
      }
  
      const nextQuestion = this.state.currentQuestion+1;
      if (nextQuestion < questions.length) {
        this.setState({currentQuestion:this.state.currentQuestion+1});
      } else {
        this.setState({showScore:this.state.showScore+1});
      }
    };
    return (
      <div className='app'>
        {this.state.showScore ? (
          <div className='score-section'>
            You scored {this.state.score} out of {questions.length}
          </div>
        ) : (
          <>
            <hi>{this.state.message ? `${this.state.message}`:'helloworld'}</hi>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {this.state.currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[this.state.currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[this.state.currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}