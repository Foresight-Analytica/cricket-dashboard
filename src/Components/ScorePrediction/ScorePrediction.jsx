import { useEffect, useState } from 'react';
import flag_1 from '../../assets/pak.png'
import flag_3 from '../../assets/nz.png'
import './ScorePrediction.css'
 
const ScorePrediction = () => {
  const [over, setover] = useState(0)
  const score = ["140-170", "135-165", "155-185", "145-175", "150-180", "141-161", "139-159", "140-160", "144-164", "151-171",
    "159-169", "153-163", "160-170", "164-174", "158-168", "166-172", "152-158", "152", "155"]

  useEffect(() => {
    if (over === 19) {
      setover(0);
    }
  }, [over]);

  return (
    <div className="score-predictor-container ">
      <div className="score-predictor-card">
        <div className="card-content">
          <h3 className="title">ICC T20 World Cup 2023</h3>
          <p className="subtitle">Semi-Final</p>
          <div className="flags-container">
            <img className="score-predictor-flag" src={flag_3} alt="Country Flag 1" />
            <h3 className="vs-text">Vs</h3>
            <img className="score-predictor-flag" src={flag_1} alt="Country Flag 2" />
          </div>
          <div className="score-container">
            <h3 className="score-title">Forecasted Score for Over No {over}: {score[over]}</h3>
            <button className="next-button" onClick={() => setover(over + 1)}>Next Over</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScorePrediction;
