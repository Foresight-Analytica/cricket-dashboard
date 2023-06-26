import {useState} from 'react'
import {fetchNextBestBatsman,getNextBestBatsman} from '../../api/api'
import './TeamComposition.css'

const TeamComposition = () => {

  const [inning, setinning] = useState('')
  const [wicket, setwicket] = useState('')
  const [nextBatsman, setnextBatsman] = useState()

  const [average, setaverage] = useState('')
  const [strikeRate, setstrikeRate] = useState('')
  const [totalInning, settotalInning] = useState('')
  const [impact, setimpact] = useState('')

  const [average2, setaverage2] = useState('')
  const [strikeRate2, setstrikeRate2] = useState('')
  const [totalInning2, settotalInning2] = useState('')
  const [impact2, setimpact2] = useState('')



  

  const generateMatchSituation = async () => {
    try {
      const data = await fetchNextBestBatsman(inning, wicket)
      console.log(data)
      setnextBatsman(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getNextBatsman1 = async () => {
    console.log('inning id ='+ inning+', wicket id =' + wicket)
    const data = {
      average: average2,
      sr: strikeRate2,
      total_runs: totalInning2
    };
    console.log(data)
    try {
      const result = await getNextBestBatsman(inning, wicket,data)
      console.log(result)
      setimpact2(result)
    } catch (error) {
      console.log(error)
    }
  }

  const getNextBatsman2 = async () => {
    const data = {
      average: average,
      sr: strikeRate,
      total_runs: totalInning
    };
    try {
      console.log(inning, wicket, data);
      const result = await getNextBestBatsman(inning, wicket,data)
      console.log(result)
      setimpact(result)
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="container">
      <div className="column">
        <div className="card-1">
          <h3 className="card-title">Match Situation</h3>
          <label htmlFor="inning" className="card-subtitle">
            Inning:
          </label>
          <input type="text" id="inning" value={inning} onChange={(e) => setinning(e.target.value)} />
          <label htmlFor="wicket" className="card-subtitle">
            Wicket:
          </label>
          <input type="text" id="wicket" value={wicket} onChange={(e) => setwicket(e.target.value)} />
          <button className="button" onClick={() => generateMatchSituation()}>
            Situation
          </button>
          {nextBatsman && (
            <div>
            <h4 className="card-title">Next Batsman:</h4>
            <p>Runs: {nextBatsman.Runs}</p>
            <p>Balls: {nextBatsman.Balls}</p>
            <p>Wickets: {nextBatsman.Wickets}</p>
            <p>Batsman Not out Boundaries : {nextBatsman.Batmsan1_not_out_boundaries}</p>
            <p>Batsman Not out Dot Balls : {nextBatsman.Batmsan1_not_out_dot_balls}</p>
            <p>Batsman Not out Runs : {nextBatsman.Batmsan1_not_out_runs}</p>
            <p>Batsman Not out Balls : {nextBatsman.Batmsan_not_out_balls}</p>
            <p>Batsman out Balls : {nextBatsman.Batmsan_out_balls}</p>
            <p>Batsman out Boundaries : {nextBatsman.Batmsan_out_boundaries}</p>
            <p>Batsman out Dot Balls : {nextBatsman.Batmsan1_not_out_dot_balls}</p>
            <p>Batsman out Runs : {nextBatsman.Batmsan_out_dot_balls}</p>
            <p>Boundaries : {nextBatsman.Boundaries}</p>
            <p>CRR : {nextBatsman.CRR}</p>
            <p>Dot Balls : {nextBatsman.DotBalls}</p>
            <p>Required Run Rate: {nextBatsman.Req_RR}</p>
          </div>
          )}
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h3 className="card-title">Batsman 1</h3>
          <div className="column">
          <label htmlFor="average" className="card-subtitle">
            Average:
          </label>
          <input type="text" id="average" value={average2} onChange={(e) => setaverage2(e.target.value)} />
          <label htmlFor="sr" className="card-subtitle">
            Strike Rate:
          </label>
          <input type="text" id="sr" value={strikeRate2} onChange={(e) => setstrikeRate2(e.target.value)} />
          <div className="column">
          <label htmlFor="totalInning" className="card-subtitle">
            Total Inning:
          </label>
          <input type="text" id="totalInning" value={totalInning2} onChange={(e) => settotalInning2(e.target.value)} />
          <button className="button" onClick={() => getNextBatsman1()}>
            Calculate
          </button>
          <h4 className="card-subtitle">Impact: {impact2}</h4>
          </div>
          </div>
          
        </div>
        <div className="card">
          <h3 className="card-title">Batsman 2</h3>
          <div className="column">
          <label htmlFor="average" className="card-subtitle">
            Average:
          </label>
          <input type="text" id="average" value={average} onChange={(e) => setaverage(e.target.value)} />
          <label htmlFor="sr" className="card-subtitle">
            Strike Rate:
          </label>
          <input type="text" id="sr" value={strikeRate} onChange={(e) => setstrikeRate(e.target.value)} />
          <div className="column">
          <label htmlFor="totalInning" className="card-subtitle">
            Total Inning:
          </label>
          <input type="text" id="totalInning" value={totalInning} onChange={(e) => settotalInning(e.target.value)} />
          <button className="button" onClick={() => getNextBatsman2()}>
            Calculate
          </button>
          <h4 className="card-subtitle">Impact: {impact}</h4>

          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
  
}

export default TeamComposition