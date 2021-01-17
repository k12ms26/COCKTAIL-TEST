import React from 'react';
import queryString from 'query-string';
import '../index.css';

export default class Result extends React.Component {

    constructor(props) {
        super(props);
    
        const { search } = this.props.location;

        const queryObj = queryString.parse(search);
        this.state = {
            total_ei: queryObj.ei,
            total_ns: queryObj.ns,
            total_tf: queryObj.tf,
            total_pj: queryObj.pj,
            result: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/result/search'+ this.props.location.search)
            .then(res=>res.json())
            .then(res => {
                console.log(JSON.stringify(res));
                this.setState({result: res});
            });
    }

    render() {
        return (
            <div className='app'>
                <div className="Result">
                    당신의 유형은
                    <br></br>
                    <br></br>
                    {this.state.result.result_type}
                </div>
                <div><img className="image" src = {this.state.result.image} /></div>
                <div>{this.state.result.description}</div>
            </div>
        );
    }
}