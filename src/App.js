import './App.css';
import { useState } from 'react';
import Init from './background/InitBG';
import TestBG from './background/TestBG';
import ResultBG from './background/ResultBG';
import Landing from './components/Landing';
import Info from './components/Info';
import Logo from './components/Logo';

function App() {
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Logo className="top-logo"/>
      {/* <TestBG /> */}
      {/* <ResultBG /> */}
      {/* <Landing /> */}
      <Info />
    </div>
  );
}

export default App;



