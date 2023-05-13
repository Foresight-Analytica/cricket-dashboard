//import React from 'react'
import './Home.css'
//import Cards from '../Cards/Cards'

const Home = () => {
    return (
        <div className="home">
            <div className="title" style={{ gridColumn: '1 / span 4'}}>
                Cricket Dashboard
            </div>
            <div className="card" style={{ gridColumn: '1 / span 4', gridRow: '2' }}>
                Live Match
            </div>
            <div className="card" style={{  gridColumn: '1 / span 2', gridRow: '3' }}>
                Score Prediction
            </div>
            <div className="card " style={{  gridColumn: '3 / span 2', gridRow: '3' }}>
                Win Probability
            </div>
        </div>
    )
}

export default Home