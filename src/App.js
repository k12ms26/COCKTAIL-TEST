import logo from './logo.svg';
import './App.css';
import Questionnaire from './components/Questionnaire';
import { render } from 'react-dom';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/index')
        .then(res=>res.json())
        .then(data=>this.setState({message:data.message}));
  }
  
  render(){
    const {message} = this.state;
    return (
      <div className="App">
        <hi>{message ? `${message}`:'helloworld'}</hi>
        <h1>JavaScript Quiz</h1>
        <Questionnaire />
      </div>
    );
  }

}

export default App;
