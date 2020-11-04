import './App.css';
import { useState } from 'react';
import Landing from './components/Landing';
import Info from './components/Info';
import Logo from './components/Logo';
import question from './question.json';
import Test from './components/Test';
import Result from './components/Result';

function App() {
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);

  const goToNextPage = () => {
    setPage(page+1)
  }
  const goToNextPageAndAddScore = (val) => {
    setPage(page+1)
    setScore(score+val)
  }
  const goToTheFirstPage = () => {
    setPage(0)
    setScore(0)
    setUserName('')
  }
  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div className="App">
      {
        page !== 0 && <Logo className="top-logo"/>
      }
      {
        page === 0 && <Landing goToNextPage={goToNextPage}/>
      }
      {
        page === 1 && 
        <Info page={page} 
              handleNameChange={handleNameChange} 
              goToNextPage={goToNextPage}
              userName={userName}/>
      }
      {
        page > 1 && page < 7 &&
        <Test score={score}
              page={page} 
              data={question[page-2]}
              goToNextPage={goToNextPageAndAddScore}/>
      }
      {
        page >= 7 &&
        <Result score={score} 
                userName={userName}
                goToTheFirstPage={goToTheFirstPage}
        />
      }
    </div>
  );
}

export default App;



