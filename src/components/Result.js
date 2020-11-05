import { useState } from 'react';
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
function Return(props) {
  return (
    <div className="next-step-btn-container return">
      <button className="next-step-btn return"  onClick={props.goToTheFirstPage}> 
        重新開始
      </button>
    </div>
  );
}

function mapScore(val) {
  if (val <= 5) return 'peach';
  else if (val >= 6 && val <= 10) return 'kiwi';
  else if (val >= 11 && val <= 15) return 'strawberry';
  return 'orange';
} 

function Result(props) {
  console.log(props)
  const [isLoading, setisLoading] = useState('idle')

  const result_descript = {
    'peach': '你熱情洋溢、富有想像力。 認為生活充滿無限可能性。 能很快地將接收到的資訊並舉一反三，很務實的解決問題，相信自己一直能夠朝更好的方向前進。對大家而言，你是一位樂於欣賞和支持別人，給人靈活、有活力的感覺，會有規劃的記錄下自己的成長的過程，也擅於分享給他人。',
    'kiwi': '平常不喜歡引人關注的你，是個做事低調但非常自律及自我要求高的人，你擁有許多尚未被人挖掘的潛能，喜歡事情有條理，也很注重工作上的效率。對於大家而言，你是個獨特的存在，剛開始看似內向，但一和你相處久了之後就會發現你是一個很穩靠的工作夥伴，所以大家都喜歡向你詢問想法或意見，作為他們重要的參考依據。',
    'strawberry': '你外向、非常能言善道，注重自己對外的形象，擁有讓人無法忽視的外在氣場，但同時也是個好親近的人。你很注重工作上是否能夠為你帶來成就感，比起平凡無趣的工作，你更喜歡富有挑戰性的任務。對於大家而言，你經常是在討論會議上擔任發言或是主要溝通的角色，只要有你在場，再難解決的客戶也能夠被你說服。',
    'orange': '你對於美感總是有獨特的見解及品味，擁有獨立思考及打理生活的能力，平常的你不拘小節，但如果是碰到自己在意或覺得重要的事情不會輕易妥協。對於大家而言，你看起來很冷靜讓人不敢輕易靠近，但認識你的人都知道其實你是很願意分享想法、聆聽他人意見的人。'
  }

  const rank = mapScore(props.score)

  const formSubmit = () => {
    setisLoading('wait')
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        result: rank,
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
    setisLoading('done')
  }

  const handleGoToFirst = () => {
    setisLoading('idle')
    props.goToTheFirstPage()
  }
  //TODO change test-container 2 result-container
  return (
    <div>
      <ResultBG />
      <div className="content-container">
        <div className="mid-container">
          <div className="test-container"> 
            <div className="greet">Hi, {props.userName}，以下是你的測驗結果：</div>
            <div className="result-descipt">{result_descript[rank]}</div>
            <Confirm formSubmit={formSubmit}/>
            <Return goToTheFirstPage={handleGoToFirst}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;