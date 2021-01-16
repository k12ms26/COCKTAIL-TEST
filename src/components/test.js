import React from 'react';
import { Link } from '@version/react-router-v3';
import '../index.css'

export default class Test extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            message: null,
            question: null,
            currentQuestion: 0,
            showScore: false,
            total_ei: 0,
            total_ns: 0,
            total_tf: 0,
            total_pj: 0,
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
      
        const handleAnswerOptionClick = (option) => {
          this.setState({total_ei:this.state.total_ei + option.ei_point});
          this.setState({total_ns:this.state.total_ns + option.ns_point});
          this.setState({total_tf:this.state.total_tf + option.tf_point});
          this.setState({total_pj:this.state.total_pj + option.pj_point});
    
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
    
        const questionoptioncomponent = this.state.questionarray.map(item => {
          if (item.index == this.state.currentQuestion+1) {
            return item.options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)}>{option.description}</button>
            ))
          } else {
          }
        })
    
        return (
          <div className='app'>
            {this.state.showScore ? (
              <div className='score-section'>
                <>
                  Your score:
                  <br></br>
                  E/I: {this.state.total_ei}
                  <br></br>
                  N/S: {this.state.total_ns}
                  <br></br>
                  T/F: {this.state.total_tf}
                  <br></br>
                  P/J: {this.state.total_pj}
                  <Link to={{
                        pathname: "/result",
                        search: "?ei=" +this.state.total_ei+ "&ns=" +this.state.total_ns+ "&tf=" +this.state.total_tf + "&pj=" +this.state.total_pj,
                        state: {
                            total_ei: this.state.total_ei,
                            total_ns: this.state.total_ns,
                            total_tf: this.state.total_tf,
                            total_pj: this.state.total_pj,
                  }}}>
                    <button>Get the Result</button>
                  </Link>
                </>
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
                  {questionoptioncomponent}
                </div>
              </>
            )}
          </div>
        );
      }
}