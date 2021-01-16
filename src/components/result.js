import React from 'react';

export default class Result extends React.Component {

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

    

    render() {
        return (
            <div className='app'>
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
                    </>
                </div>
            </div>
        );
    }
}