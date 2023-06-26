import { useEffect, useState } from 'react';
import './GroundEffect.css'
import Papa from 'papaparse';
import {getGroundBatsmanScore} from '../../api/api'



const GroundEffect = () => {
  const [ground, setGround] = useState('');
  const [opponentTeam, setOpponentTeam] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [playerCountry, setPlayerCountry] = useState('');
  const [runs, setruns] = useState('')
  //const [playerData, setPlayerData] = useState(null);

  const grounds = {
    'Abu Dhabi': '1965', 'Adelaide': '131', 'Ahmedabad': '840', 'Auckland': '283', 'Basseterre': '576',
    'Birmingham': '164', 'Bridgetown': '199', 'Brisbane': '209', 'Canberra': '757', 'Cardiff': '644', 'Cape Town': '174',
    'Carrara': '950', 'Centurion': '902', 'Christchurch': '93', 'Colombo (RPS)': '1004', 'Coolidge': '1675', 'Cuttack': '442',
    'Delhi': '333', 'Dharamsala': '1920', 'Dunedin': '769', 'Dubai (DSC)': '2439', 'Eden Gardens': '292', 'Gqeberha': '173',
    'Gros Islet': '1697', 'Guwahati': '2865', 'Hamilton': '504', 'Hyderabad': '1981', 'Indore': '1055', 'Jaipur': '664', 'Johannesburg': '508',
    'Kingston': '200', 'Lahore': '545', 'Lauderhill': '2405', 'Leeds': '179', 'Lucknow': '3355', 'Manchester': '75',
    'Melbourne': '61', 'Mirpur': '2025', 'Mohali': '1015', 'Mount Maunganui': '2524', 'Nagpur': '2399', 'Napier': '453',
    'Nottingham': '34', 'Paarl': '1031', 'Pallekele': '2503', 'Perth': '3404', 'Providence': '1986', 'Pune': '2677',
    'Rajkot': '2401', 'Ranchi': '2575', 'Roseau': '629', 'Sharjah': '848', 'Southampton': '1184', 'St George\'s': '1131', 'Sydney': '132', 'Tarouba': '2041',
    'Thiruvananthapuram': '3400', 'Visakhapatnam': '1896', 'Wankhede': '713', 'Wellington': '1166'
  }

  const Teams = {
    'India': '6', 'England': '1', 'Pakistan': '7', 'South_Africa': '3', 'New_Zealand': '5',
    'Australia': '2', 'West_Indies': '4', 'Sri_Lanka': '8', 'Bangladesh': '25', 'Afghanistan': '40'
  }


  useEffect(() => {

  }, [])



  const extractDataFromCSV = async () => {
    const opponent = Teams[opponentTeam]
    const groundname = grounds[ground]
    console.log(opponent, String(playerName), groundname)

    const filteringConditions = {
      Player_name: playerName,
      Ground_Name: groundname,
      Opponent_Team: opponent,
    };
    try {
      const response = await fetch('src/Data/master_df_ima.csv');
      const text = await response.text();
      const parsedData = Papa.parse(text).data;
      const columns = parsedData[0];
      console.log(columns)
      const extractedData = parsedData.filter((row) => {
        return Object.entries(filteringConditions).every(([key, value]) => {
          const columnIndex = columns.indexOf(key);
          const rowValue = row[columnIndex];
          return rowValue === value;
        });
      });
      const extractedRow = extractedData[extractedData.length - 1];
      const Player_Country_Afghanistan = extractedRow[3] === 'Afghanistan' ? 1 : 0
      const Player_Country_Australia = extractedRow[3] === 'Australia' ? 1 : 0
      const Player_Country_Bangladesh = extractedRow[3] === 'Bangladesh' ? 1 : 0
      const Player_Country_England = extractedRow[3] === 'England' ? 1 : 0
      const Player_Country_India = extractedRow[3] === 'India' ? 1 : 0
      const Player_Country_New_Zealand = extractedRow[3] === 'New_Zealand' ? 1 : 0
      const Player_Country_Pakistan = extractedRow[3] === 'Pakistan' ? 1 : 0
      const Player_Country_South_Africa = extractedRow[3] === 'South_Africa' ? 1 : 0
      const Player_Country_Sri_Lanka = extractedRow[3] === 'Sri_Lanka' ? 1 : 0
      const Player_Country_West_Indies = extractedRow[3] === 'West_Indies' ? 1 : 0
      const Opponent_Team_1 = extractedRow[4] === '1' ? 1 : 0
      const Opponent_Team_2 = extractedRow[4] === '2' ? 1 : 0
      const Opponent_Team_25 = extractedRow[4] === '25' ? 1 : 0
      const Opponent_Team_3 = extractedRow[4] === '3' ? 1 : 0
      const Opponent_Team_4 = extractedRow[4] === '4' ? 1 : 0
      const Opponent_Team_40 = extractedRow[4] === '40' ? 1 : 0
      const Opponent_Team_5 = extractedRow[4] === '5' ? 1 : 0
      const Opponent_Team_6 = extractedRow[4] === '6' ? 1 : 0
      const Opponent_Team_7 = extractedRow[4] === '7' ? 1 : 0
      const Opponent_Team_8 = extractedRow[4] === '8' ? 1 : 0


      const data = {
        "Player_Country_Afghanistan": Player_Country_Afghanistan,
        "Player_Country_Australia": Player_Country_Australia,
        "Player_Country_Bangladesh": Player_Country_Bangladesh,
        "Player_Country_England": Player_Country_England,
        "Player_Country_India": Player_Country_India,
        "Player_Country_New_Zealand": Player_Country_New_Zealand,
        "Player_Country_Pakistan": Player_Country_Pakistan,
        "Player_Country_South_Africa": Player_Country_South_Africa,
        "Player_Country_Sri_Lanka": Player_Country_Sri_Lanka,
        "Player_Country_West_Indies": Player_Country_West_Indies,
        "Opponent_Team_1": Opponent_Team_1,
        "Opponent_Team_2": Opponent_Team_2,
        "Opponent_Team_25": Opponent_Team_25,
        "Opponent_Team_3": Opponent_Team_3,
        "Opponent_Team_4": Opponent_Team_4,
        "Opponent_Team_40": Opponent_Team_40,
        "Opponent_Team_5": Opponent_Team_5,
        "Opponent_Team_6": Opponent_Team_6,
        "Opponent_Team_7": Opponent_Team_7,
        "Opponent_Team_8": Opponent_Team_8,
        "Bowler_1_matches": extractedRow[15],
        "Bowler_1_innings": extractedRow[16],
        "Bowler_1_total_overs": extractedRow[17],
        "Bowler_1_maidens_earned": extractedRow[18],
        "Bowler_1_wickets_taken": extractedRow[19],
        "Bowler_1_economy": extractedRow[20],
        "Bowler_1_SR": extractedRow[21],
        "Bowler_2_matches": extractedRow[23],
        "Bowler_2_innings": extractedRow[24],
        "Bowler_2_total_overs": extractedRow[25],
        "Bowler_2_maidens_earned": extractedRow[26],
        "Bowler_2_wickets_taken": extractedRow[27],
        "Bowler_2_economy": extractedRow[28],
        "Bowler_2_SR": extractedRow[29],
        "Bowler_3_matches": extractedRow[31],
        "Bowler_3_innings": extractedRow[32],
        "Bowler_3_total_overs": extractedRow[33],
        "Bowler_3_maidens_earned": extractedRow[34],
        "Bowler_3_wickets_taken": extractedRow[35],
        "Bowler_3_economy": extractedRow[36],
        "Bowler_3_SR": extractedRow[37],
        "G_matches": extractedRow[38],
        "G_Inns": extractedRow[39],
        "G_Not_Outs": extractedRow[40],
        "G_Balls_Faced": extractedRow[43],
        "G_SR": extractedRow[45],
        "G_100": extractedRow[46],
        "G_50": extractedRow[47],
        "G_0s": extractedRow[48],
        "G_4s": extractedRow[49],
        "G_6s": extractedRow[50]
      }
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBatsmanScore = async () => {
    const data = await extractDataFromCSV()
    const result = await getGroundBatsmanScore(data)
    setruns(result)
  }

  return (
    <div className="container">
      <div className="card">
        <div className="column">
          <h3 className="card-title">Runs Predictor - Team-Ground Dynamics</h3>
          <br />
          <label htmlFor="groundName" className='card-subtitle'>Ground Name:</label>
          <select value={ground} onChange={(e) => setGround(e.target.value)}>
            <option value="">Select a ground</option>
            {Object.keys(grounds).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="playerCountry" className='card-subtitle'>Player Country:</label>
          <select value={playerCountry} onChange={(e) => setPlayerCountry(e.target.value)}>
            {Object.keys(Teams).map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="oppositionCountry" className='card-subtitle'>Opposition Country:</label>
          <select value={opponentTeam} onChange={(e) => setOpponentTeam(e.target.value)}>
            {Object.keys(Teams).map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="playerName" className='card-subtitle'>Player Name:</label>
          <input type="text" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        </div>
        <div className="column">
          <button className="button" onClick={() => {
            fetchBatsmanScore()
          }}>Predict</button>
        </div>
      </div>
      <div className="card" >
        <h3 className="card-title">Ground Effect on the Batsman</h3>
        <h5 className='card-subtitle'>{ playerName.replace("_", " ")} @ &nbsp;
          <span className='ground-name'>{ground}</span></h5>

        <div className="circle">
          <span className="Runs">{runs}+</span>
        </div>
      </div>
    </div>

  )
}

export default GroundEffect