import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from '../../Components/MatchCard';

function LiveScore() {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    axios.get("https://api.cricapi.com/v1/cricScore?apikey=4b8d4a0a-0c8a-422f-8624-d5f864b865fe")
      .then(response => {
        setScoreData(response.data.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {scoreData ? (
        <div>
          <h2>Live Score:</h2>
          <MatchCard
            team_1= {scoreData[0].t1}
            team_2= {scoreData[0].t2}
            status = {scoreData[0].status}
            logo_1 = {scoreData[0].t1img}
            logo_2 = {scoreData[0].t2img}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LiveScore;
