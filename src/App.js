import './App.css';
import { useState } from 'react';
import Landing from './components/Landing';
import Info from './components/Info';
import Logo from './components/Logo';

function App() {
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);

  const goToNextPage = () => {
    setPage(page+1)
  }
  const goToTheFirstPage = () => {
    setPage(0)
    setScore(0)
    setUserName('')
  }
  const handleNameChange = (e) => {
    console.log(e.target.value)
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
        page > 1 && page < 7 
        // <Test page={page} 
        // goToNextPage={goToNextPage}/>
      }
      
    </div>
  );
}

export default App;



