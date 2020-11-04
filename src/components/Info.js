import TestBG from '../background/TestBG';
import Page from '../components/Page';

function Confirm() {
  return (
    <div className="next-step-btn-container separator">
    <button className="next-step-btn"> 
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
                  <input type="text" onChange={props.handleChange} placeholder="輸入姓名"/>
                </div>
                <Confirm />
                <Page page={0}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Info;