import React from 'react';
import { Link } from '@version/react-router-v3'

export default class Test extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            message: null,
            showScore: false,
            total_ei: 0,
            total_ns: 0,
            total_tf: 0,
            total_pj: 0,
            current: 0,
            questions: [],
            count: 0
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/question')
            .then(res=>res.json())
            .then(res => {
                console.log(JSON.stringify(res));
                this.setState({count:res.count});
                this.setState({questions: res.results.map(item => ({
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
        
            const next = this.state.current+1;
            if (next < this.state.count) {
                this.setState({current:next});
            } else {
                this.setState({showScore:this.state.showScore+1});
            }
        };
    
        const questiontextcomponent = this.state.questions.map(item => {
            if (item.index == this.state.current+1) {
                return <div className='question-text'>{item.content}</div>
            }
        })
    
        const questionoptioncomponent = this.state.questions.map(item => {
            if (item.index == this.state.current+1) {
                return item.options.map((option) => (
                <button onClick={() => handleAnswerOptionClick(option)}>{option.description}</button>
                ))
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
                            }}>
                            <button>결과 확인</button>
                        </Link>
                    </>
                </div>
                ) : (
                <>
                    <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {this.state.current + 1}</span>/{this.state.count}
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