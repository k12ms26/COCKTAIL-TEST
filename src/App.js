import React, { Component, useState } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      question: null,
      currentQuestion: 0,
      showScore: false,
      score: 0,
      index: 0,
      questionarray: [],
      count: 0
    };
  }

  
  componentDidMount() {
    fetch('http://localhost:3001/api/index')
        .then(res=>res.json())
        .then(res=> {
          console.log(JSON.stringify(res));
          this.setState({message:res.message});
        });
    fetch('http://localhost:3001/api/question')
        .then(res=>res.json())
        .then(res => {
          console.log(JSON.stringify(res));
          this.setState({count:res.count});
          this.setState({questionarray: res.results.map(item => ({
            content: item.content,
            options: item.options,
            index: item.index
          }))
        });
      })
  }

  render() {
    const questions = [
      {
        questionText: "questioncomponent",
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
  
    const handleAnswerOptionClick = (ei_point) => {
      this.setState({score:this.state.score + ei_point});
  
      const nextQuestion = this.state.currentQuestion+1;
      if (nextQuestion < this.state.count) {
        this.setState({currentQuestion:this.state.currentQuestion+1});
      } else {
        this.setState({showScore:this.state.showScore+1});
      }
    };

    const questiontextcomponent = this.state.questionarray.map(item => {
      if (item.index == this.state.currentQuestion+1) {
        return <div className='question-text'>{item.content}</div>
      } else {

      }
    })

    return (
      <div className='app'>
        {this.state.showScore ? (
          <div className='score-section'>
            You scored {this.state.score} out of {this.state.count}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {this.state.currentQuestion + 1}</span>/{this.state.count}
              </div>
              <div>{questiontextcomponent}</div>
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