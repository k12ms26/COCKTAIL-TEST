import logo from './logo.svg';
import './App.css';
import Questionnaire from './components/Questionnaire';
import Buttons from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1>JavaScript Quiz</h1>
      <Questionnaire />
    </div>
  );
}

export default App;
