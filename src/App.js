import './App.css';
import { useState } from 'react';
import Init from './background/InitBG';
import TestBG from './background/TestBG';
import ResultBG from './background/ResultBG';
import Landing from './components/Landing';

function App() {
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      {/* <TestBG /> */}
      {/* <ResultBG /> */}
      <Landing />
    </div>
  );
}

export default App;



