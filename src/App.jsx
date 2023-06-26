
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScorePrediction from './Components/ScorePrediction/ScorePrediction';
import WinProbability from './Components/WinProbability/WinProbability';
import HighImpactMoment from './Components/HighImpactMoment/HighImpactMoment';
import TeamComposition from './Components/TeamComposition/TeamComposition';
import GroundEffect from './Components/GroundEffect/GroundEffect';
import SideBar from './Components/SideBar/SideBar';


function App() {

  return (
    <div className="App">
      <div className="AppGlass">
      
        <Router>
        <SideBar/>
          <Routes>  
            <Route path="/score-prediction" element={<ScorePrediction/>} />
            <Route path="/win-probability" element={<WinProbability/>} />
            <Route path="/high-impact-moment" element={<HighImpactMoment/>} />
            <Route path="/team-composition" element={<TeamComposition/>} />
            <Route path="/ground-effect" element={<GroundEffect/>} />
            <Route path="/" exact element={<ScorePrediction/>} />
          </Routes>
        </Router>
      </div>

    </div>
  )
}

export default App
