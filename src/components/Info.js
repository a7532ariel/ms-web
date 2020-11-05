import TestBG from '../background/TestBG';
import Page from './Page';

function Confirm(props) {
  return (
    <div className="next-step-btn-container separator">
    <button className="next-step-btn" disabled={props.cantGoToNext} onClick={props.goToNextPage}> 
      確認
    </button>
    </div>
  );
}

function Info(props) {
    return (
      <div>
        <TestBG />
          <div className="content-container">
            <div className="mid-container">
              <div className="test-container">
                <div className="intro-test separator">
                  Hi，歡迎來到「微軟水果脫單BAR」，<br></br> 
                  準備開始囉，請輸入你的名字：
                </div>
                <div className="separator">
                  <input type="text" maxLength="5" onChange={props.handleNameChange} placeholder="輸入姓名"/>
                </div>
                <Confirm cantGoToNext={props.userName === ''} goToNextPage={props.goToNextPage}/>
                <Page page={props.page}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Info;