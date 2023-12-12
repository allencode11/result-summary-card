import './summary-img-card.component.css';
export const SummaryImgCardComponent = ({imgSource, score, text, color}) => {
  return (
    <div className={`summary-img-card ${color}`}>
      <img className='summary-img' src={imgSource} alt='card-img' />
      <div className='img-card-title'>{text}</div>
      <div className='summary-score'>
        <div className='img-card-score'>{score}</div>
        <div className='img-card-total-score'> / 100</div>
      </div>
    </div>
  )
}