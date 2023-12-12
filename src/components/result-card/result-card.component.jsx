import './result-card.component.css';
export const ResultCardComponent = () => {
  return (
    <div className='result-card'>
      <div className='text'>Your Result</div>
      <div className='oval'>
        <div className='score'>76</div>
        <div className='total-score'>of 100</div>
      </div>
      <div className='info'>
        <div className='title'>Great</div>
        <div className='content'>Your performance exceed 65% of the people conducting the test here!</div>
      </div>
    </div>
  )
}