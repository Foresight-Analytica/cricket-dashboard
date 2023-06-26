import { useState } from 'react'
import './HighImpactMoment.css' 
import flag_1 from "../../assets/pak.png";
import flag_3 from "../../assets/nz.png";
import {highImpactBoundaries, highImpactBoundaryPercentage,highImpactWicketFalling} from '../../api/api'
import { useEffect } from 'react';

const HighImpactMoment = () => {
  const [over, setover] = useState()
  const [inning, setinning] = useState()
  const [matchId, setmatchId] = useState()
  const [noOfBoundaries, setnoOfBoundaries] = useState('0')
  const [boundaries, setboundaries] = useState('0')
  const [wicketFalling, setwicketFalling] = useState('0')

  useEffect(() => {
    setboundaries('0')
    setnoOfBoundaries('0')
    setwicketFalling('0')

  }, [over,inning,matchId])
  

  const handlePredict = async () => {
    const data ={
      "match_num" : matchId,
      "innings" : inning,
      "over": over
    }
    const result1 = await highImpactBoundaries(data)
    const result2 = await highImpactBoundaryPercentage(data)
    const result3 = await highImpactWicketFalling(data)
    setboundaries(result2)
    setnoOfBoundaries(result1)
    setwicketFalling(result3)
  }

  return (
    <div className="page-content">
      <div className="card-high-impact-area">
        <div className="card-title">High Impact Moments</div>
        <br/>
        <div className="card-content">
          <table className="blueTable">
            <tbody>
              <tr className='table-row'>
                <td><span className="card-subtitle">Team A</span></td>
                <td><img className="flag" src={flag_3} alt="Country Flag 1" /></td>
              </tr>
              <tr className='table-row'>
              </tr>
              <br/>
              <tr className='table-row'>
              <td><span className="card-subtitle">Team B</span></td>
                <td><img className="flag" src={flag_1} alt="Country Flag 1" /></td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
            <div className="row">
            <table className="blueTable">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="inning" className="card-subtitle">
                    Match Id :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="inning"
                    value={matchId}
                    onChange={(e) => setmatchId(e.target.value)}
                  />
                </td>
              </tr>
              <br/>
              <tr>
                <td>
                  <label htmlFor="wicket" className="card-subtitle">
                    Over :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="wicket"
                    value={over}
                    onChange={(e) => setover(e.target.value)}
                  />
                </td>
              </tr>
              <br/>
              <tr>
                <td>
                  <label htmlFor="wicket" className="card-subtitle">
                    Innings :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="wicket"
                    value={inning}
                    onChange={(e) => setinning(e.target.value)}
                  />
                </td>
              </tr>
              <br/>
              <button className="next-button" onClick={handlePredict()}>Predict </button>
            </tbody>
          </table>
            </div>
        </div>
      </div>

      <div className="card-high-impact-area">
        <div className="card-title">Wicket Statistics</div>
        <div className="card-content">
          <div className="row">
            <div className="col">
              <div className="card-info">
                <h3>Number of Boundaries</h3>
                <div className="square">
                  <span className='text'>{noOfBoundaries}</span>
                </div>
                </div>
            </div>
            <div className="col">
              <div className="card-info">
                <h3>Boundary %</h3>
                <div className="square">
                  <span className='text'>{boundaries} %</span>
                </div>
                </div>
            </div>
            <div className="col">
              <div className="card-info">
                <h3>Wicket Falling %</h3>
                <div className="square">
                  <span className='text'>{wicketFalling} %</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighImpactMoment