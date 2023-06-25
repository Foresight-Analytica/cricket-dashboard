import  { useEffect, useState } from 'react';
import './GroundEffect.css'

const GroundEffect = () => {
  const [playerCountry, setPlayerCountry] = useState('');
  const [opponentTeam, setOpponentTeam] = useState('');
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {

  }, [])
  

  // const handleOpponentTeamChange = (event) => {
  //   setOpponentTeam(event.target.value);
  // };

  // const handlePlayerNameChange = (event) => {
  //   setPlayerName(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // }


  return (
    <div className="container">
        <div className="card">
          <div className="column">
          <h3 className="card-title">Runs Predictor - Team-Ground Dynamics</h3>
          <br />
          <label htmlFor="playerCountry" className='card-subtitle'>Player Country:</label>
          <select id="playerCountry" value={playerCountry} onChange={(e) => setPlayerCountry(e.target.value)}>
            <option value="">Select Player Country</option>
            <option value="Australia" id="0">Australia</option>
            <option value="England" id="1">England</option>
            <option value="India" id="2">India</option>
          </select>
          <br />
          <label htmlFor="playerCountry" className='card-subtitle'>Opposition Country:</label>
          <select id="OpponentTeam" value={opponentTeam} onChange={(e) => setOpponentTeam(e.target.value)}>
            <option value="">Select Opposition Team Country</option>
            <option value="Australia" id="0">Australia</option>
            <option value="England" id="1">England</option>
            <option value="India" id="2">India</option>
          </select>
          <br />
          <label htmlFor="playerName" className='card-subtitle'>Player Name:</label>
          <input type="text" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        </div>
        <div className="column">
       <button className="button">Predict</button>
        </div>
      </div>
        <div className="card" >
          <h3 className="card-title">Ground Effect on the Batsman</h3>
          <h5 className='card-subtitle'>Virat Kohli @ &nbsp;
          <span className='ground-name'>Delhi</span></h5>
          
          <div className="circle">
  <span className="Runs">80+</span>
</div>
        </div>
    </div>

  )
}

export default GroundEffect