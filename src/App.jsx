
import './App.css'
import Home from './Components/Home/Home'
import RightSide from './Components/RightSide/RightSide'
import SideBar from './Components/SideBar/SideBar'

function App() {

  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar/>
        <Home/>
        <RightSide/>
      </div>

    </div>
  )
}

export default App
