import './App.css';
import img1 from './assets/images/reaction.png';
import img2 from './assets/images/memory.png';
import img3 from './assets/images/verbal.png';
import img4 from './assets/images/visual.png';
import { BtnComponent } from "./components/btn/btn.component";
import { SummaryImgCardComponent } from "./components/summary-img-card/summary-img-card.component";
import { ResultCardComponent } from "./components/result-card/result-card.component";

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <ResultCardComponent></ResultCardComponent>

        <div className='summary-card'>
          <div className='summary-title'>Summary</div>
          <SummaryImgCardComponent color='red' imgSource={img1} text='Reaction' score={80}></SummaryImgCardComponent>
          <SummaryImgCardComponent color='yellow' imgSource={img2} text='Memory' score={92}></SummaryImgCardComponent>
          <SummaryImgCardComponent color='green' imgSource={img3} text='Verbal' score={61}></SummaryImgCardComponent>
          <SummaryImgCardComponent color='blue' imgSource={img4} text='Visual' score={73}></SummaryImgCardComponent>
          <BtnComponent></BtnComponent>
        </div>

      </div>
    </div>
  );
}

export default App;
