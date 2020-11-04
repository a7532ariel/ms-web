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

function Result(props) {
  console.log(props)
  const formSubmit = () => {
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        result: 1,
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