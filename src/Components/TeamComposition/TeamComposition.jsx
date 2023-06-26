import { useState } from "react";
import { fetchNextBestBatsman, getNextBestBatsman } from "../../api/api";
import "./TeamComposition.css";

const TeamComposition = () => {
  const [inning, setinning] = useState("");
  const [wicket, setwicket] = useState("");
  const [nextBatsman, setnextBatsman] = useState();

  const [average, setaverage] = useState("");
  const [strikeRate, setstrikeRate] = useState("");
  const [totalInning, settotalInning] = useState("");
  const [impact, setimpact] = useState("");

  const [average2, setaverage2] = useState("");
  const [strikeRate2, setstrikeRate2] = useState("");
  const [totalInning2, settotalInning2] = useState("");
  const [impact2, setimpact2] = useState("");

  const generateMatchSituation = async () => {
    try {
      const data = await fetchNextBestBatsman(inning, wicket);
      console.log(data);
      setnextBatsman(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNextBatsman1 = async () => {
    console.log("inning id =" + inning + ", wicket id =" + wicket);
    const data = {
      average: average2,
      sr: strikeRate2,
      total_runs: totalInning2,
    };
    console.log(data);
    try {
      const result = await getNextBestBatsman(inning, wicket, data);
      console.log(result);
      setimpact2(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getNextBatsman2 = async () => {
    const data = {
      average: average,
      sr: strikeRate,
      total_runs: totalInning,
    };
    try {
      console.log(inning, wicket, data);
      const result = await getNextBestBatsman(inning, wicket, data);
      console.log(result);
      setimpact(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="team-composition-grid">
      <div className="team-composition-div1">
        <div className="card-1">
          <h3 className="card-title">Match Situation</h3>
          <table className="blueTable">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="inning" className="card-subtitle">
                    Inning:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="inning"
                    value={inning}
                    onChange={(e) => setinning(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="wicket" className="card-subtitle">
                    Wicket:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="wicket"
                    value={wicket}
                    onChange={(e) => setwicket(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="button" onClick={() => generateMatchSituation()}>
            Situation
          </button>
          {nextBatsman && (
            <div>
              <h4 className="card-title">Next Batsman:</h4>
              <p>Runs: {nextBatsman.Runs}</p>
              <p>Balls: {nextBatsman.Balls}</p>
              <p>Wickets: {nextBatsman.Wickets}</p>
              <p>
                Batsman Not out Boundaries :{" "}
                {nextBatsman.Batmsan1_not_out_boundaries}
              </p>
              <p>
                Batsman Not out Dot Balls :{" "}
                {nextBatsman.Batmsan1_not_out_dot_balls}
              </p>
              <p>Batsman Not out Runs : {nextBatsman.Batmsan1_not_out_runs}</p>
              <p>Batsman Not out Balls : {nextBatsman.Batmsan_not_out_balls}</p>
              <p>Batsman out Balls : {nextBatsman.Batmsan_out_balls}</p>
              <p>
                Batsman out Boundaries : {nextBatsman.Batmsan_out_boundaries}
              </p>
              <p>
                Batsman out Dot Balls : {nextBatsman.Batmsan1_not_out_dot_balls}
              </p>
              <p>Batsman out Runs : {nextBatsman.Batmsan_out_dot_balls}</p>
              <p>Boundaries : {nextBatsman.Boundaries}</p>
              <p>CRR : {nextBatsman.CRR}</p>
              <p>Dot Balls : {nextBatsman.DotBalls}</p>
              <p>Required Run Rate: {nextBatsman.Req_RR}</p>
            </div>
          )}
        </div>
      </div>
      <div className="team-composition-div2">
        <div className="card-team-composition">
          <h3 className="card-title">Batsman 1</h3>
          <table className="blueTable">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="average" className="card-subtitle">
                    Average:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="average"
                    value={average2}
                    onChange={(e) => setaverage2(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="sr" className="card-subtitle">
                    Strike Rate:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="sr"
                    value={strikeRate2}
                    onChange={(e) => setstrikeRate2(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="totalInning" className="card-subtitle">
                    Total Inning:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="totalInning"
                    value={totalInning2}
                    onChange={(e) => settotalInning2(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button" onClick={() => getNextBatsman1()}>
                    Calculate
                  </button>
                </td>
                <td></td>
                <td>
                  <h4 className="card-subtitle">Impact: </h4>
                </td>
                <td>{impact2}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-team-composition">
          <h3 className="card-title">Batsman 2</h3>
          <table className="blueTable">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="average" className="card-subtitle">
                    Average:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="average"
                    value={average}
                    onChange={(e) => setaverage(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="sr" className="card-subtitle">
                    Strike Rate:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="sr"
                    value={strikeRate}
                    onChange={(e) => setstrikeRate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="totalInning" className="card-subtitle">
                    Total Inning:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="totalInning"
                    value={totalInning}
                    onChange={(e) => settotalInning(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button" onClick={() => getNextBatsman2()}>
                    Calculate
                  </button>
                </td>
                <td></td>
                <td>
                  <h4 className="card-subtitle">Impact: </h4>
                </td>
                <td>{impact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamComposition;
