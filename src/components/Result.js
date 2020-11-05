import ResultBG from '../background/ResultBG'

function Confirm(props) {
    return (
      <div className="next-step-btn-container">
        <button className="next-step-btn"  onClick={props.formSubmit}> 
          列印結果
        </button>
      </div>
    );
}

function mapScore(val) {
  // 16-20（柳丁）
  // 11-15（草莓）
  // 06-10（奇異果）
  // 01-05（水蜜桃）
  if (val <= 5) return 'peach';
  else if (val >= 6 && val <= 10) return 'kiwi';
  else if (val >= 11 && val <= 15) return 'strawberry';
  return 'orange';
} 

function Result(props) {
  console.log(props)
  const formSubmit = () => {
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        result: mapScore(props.score),
        name: props.userName
      }),
      headers: {
        'content-type': 'application/json'
      }
    };
    fetch('/api/print', requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
    })
  }
  return (
    <div>
      <ResultBG />
      <div className="content-container">
        <div className="mid-container">
          <Confirm formSubmit={formSubmit}/>
        </div>
      </div>
    </div>
  );
}

export default Result;