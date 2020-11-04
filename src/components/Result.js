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
    const params = new URLSearchParams({ result: props.score, name: props.userName })
    fetch(`https://ms-fruit.loca.lt/print?${params}`)
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