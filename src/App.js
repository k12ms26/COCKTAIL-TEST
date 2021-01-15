import React, { Component } from 'react';
import axios from 'axios';
import "./styles.css";

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
      posts: [
        {_id:null, options:Array, date_created:null}
      ]
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  
  componentDidMount() {
    fetch('http://localhost:3001/api/index')
        .then(res=>res.json())
        .then(data=>this.setState({message:data.message}));
    fetch('http://localhost:3001/api/question')
        .then(res=>res.json())
        .then(data=>this.setState({posts:data.results}));
        //.then(data=>this.setState({question:data.results.options.description}))
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getBlogPost = () => {
    axios.get('http://localhost:3001/api/question')
      .then((response)=>{
        const data = response.data;
        this.setState({posts:data});
      })
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
    const { id, options, date_created} = this.state.posts;
    return (
      <div className='app'>
        {this.state.showScore ? (
          <div className='score-section'>
            You scored {this.state.score} out of {questions.length}
          </div>
        ) : (
          <>
            <p>{this.state.message}</p>
            <div className='question-section'>
              <div className='question-count'>
                <span>{this.state.question} {id} {this.state.currentQuestion + 1}</span>/{questions.length}
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