import React, { useEffect, useState } from 'react';
import './WinProbability.css'
import axios from 'axios';
import { Chart } from "react-google-charts";
import { fetchMatchByIdBeforeStart, fetchWinPredictionBeforeMatchStarts } from '../../api/api';
import flag_1 from '../../assets/pak.png'
import flag_2 from '../../assets/eng.png'
import flag_3 from '../../assets/nz.png'


const WinProbability = () => {


  const [matchId, setMatchId] = useState(null);  //match ID
  const [winPrediction, setWinPrediction] = useState(0);
  const [inning, setInning] = useState();

  useEffect(() => {
    if (matchId !== null) {
      fetchWinPredictionData(matchId);
    }

  },[matchId,winPrediction]);

  const fetchWinPredictionData = async (matchId) => {
    try {
      if(inning == null){
        alert("Set the inning first")
      }
      if (inning == 1) {
        const prediction = await fetchWinPredictionBeforeMatchStarts(matchId);
        setWinPrediction(prediction);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckWinProbability = async (matchId) => {
    console.log(inning)
    await fetchWinPredictionData(matchId);
  };

  const chartData = [
    ['Outcome', 'Count'],
    ['Win', winPrediction],
    ['Loss', (100-winPrediction)]]

    const options = {
      pieSliceTextStyle: {
        color: 'white',
      },
    };

  return (
    <div className="container">
      <div className="column">
        <div className="card">
          <h3 className="card-title">ICC T20 World Cup 2023</h3>
          <p className="card-subtitle">Final</p>
          <div className="flags-container">
            <img className="flag" src={flag_1} alt="Country Flag 1" />
            <span>Vs</span>
            <img className="flag" src={flag_2} alt="Country Flag 2" />
          </div>
          <button className="button" onClick={() => handleCheckWinProbability(1298179)}>Check Win Probability</button>
        </div>
        <div className="card">
          <h3 className="card-title">ICC T20 World Cup 2023</h3>
          <p className="card-subtitle">Semi-Final</p>
          <div className="flags-container">
            <img className="flag" src={flag_3} alt="Country Flag 1" />
            <span>Vs</span>
            <img className="flag" src={flag_1} alt="Country Flag 2" />
          </div>
          <button className="button"onClick={() => handleCheckWinProbability(1298177)}>Check Win Probability</button>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <label className='card-subtitle'>Select the Inning:</label>
          <select id="dropdown" value={inning} onChange={(e) => setInning(e.target.value)}>
            <option value="1" >Inning 1</option>
            <option value="2">Inning 2</option>
          </select>
          <label className='card-subtitle'>Select Over No:</label>
          <select id="dropdown">
            <option value="">Drop Down to select the Over No</option>
            <option value="0" id='0'>0</option>
            <option value="1" id='1'>1</option>
            <option value="2" id='2'>2</option>
            <option value="3" id="3">3</option>
            <option value="4" id="4">4</option>
            <option value="5" id="5">5</option>
            <option value="6" id="6">6</option>
            <option value="7" id="7">7</option>
            <option value="8" id="8">8</option>
            <option value="9" id="9">9</option>
            <option value="10" id="10">10</option>
            <option value="11" id="11">11</option>
            <option value="12" id="12">12</option>
            <option value="13" id="13">13</option>
            <option value="14" id="14">14</option>
            <option value="15" id="15">15</option>
            <option value="16" id="16">16</option>
            <option value="17" id="17">17</option>
            <option value="18" id="18">18</option>
            <option value="19" id="19">19</option>
          </select>
          <br />
          <h3 className="card-title">Win Probability:  {winPrediction !== null ? ((winPrediction).toFixed(2)) : 0} %</h3>
        </div>
        <div>
          <div id="chartContainer">
            <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default WinProbability