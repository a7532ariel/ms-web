import TestBG from '../background/TestBG';
import Page from './Page';
import { useState } from 'react';


function Confirm(props) {
  return (
    <div className="next-step-btn-container">
      <button className="next-step-btn" disabled={props.cantGoToNext} onClick={props.goToNextPage}> 
        下一步
      </button>
    </div>
  );
}

function Test(props) {
    const [selected, setSelected] = useState(-1);
    const handleSelect = (idx) => {
      setSelected(idx)
    }

    const testPageNextPageHandler = () => {
      setSelected(-1)
      props.goToNextPage(props.data.options[selected].score)
    }

    
    let options = props.data.options.map((option, i) => {
        const select = selected === i ? 'select' : '';
        const labelClasses = `test-option-label ${select}`
        const optionClasses = `test-option-container ${select}`
        return (
          <div className={optionClasses} onClick={()=>handleSelect(i)} key={'option'+i}>
            <div className={labelClasses}>
              {
                selected === i && 
                <svg width="18" height="16" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4.13043L5.16667 9L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            </div> 
            <div className="test-option">{option.option}</div>
          </div>
        )
      }   
    );

    return (
      <div>
        <TestBG />
          <div className="content-container">
            <div className="mid-container">
              <div className="test-container">
                <div className="test-title separator">
                  問題 &nbsp;{props.page-1}
                </div>
                <div className="test-question separator">
                  {props.data.q} 
                </div>
                <div className="test-options">
                  {options}
                </div>
                <Confirm cantGoToNext={selected === -1} goToNextPage={testPageNextPageHandler} />
                <Page page={props.page}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Test;