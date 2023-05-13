import './Home.css'


const Home = () => {
    return (
        <div className="home">
            <div className="title" style={{ gridColumn: '1 / span 4'}}>
                Cricket Dashboard
            </div>
            <div className="card" style={{ gridColumn: '1 / span 4', gridRow: '2/ span 2' }}>
                Live Match
            </div>
            <div className="card" style={{  gridColumn: '1 / span 2', gridRow: '4' }}>
                Score Prediction
            </div>
            <div className="card " style={{  gridColumn: '3 / span 2', gridRow: '4' }}>
                Win Probability
            </div>
            <div className="card" style={{ gridRow: '1 / span 2'}}>
                High Impact Moment Analysis
            </div>
            <div className="card" style={{ gridRow: '3' }}>
                Team Composition
            </div>
            <div className="card" style={{ gridRow: '4' }}>
                Ground Effect - Home Advantage
            </div>
        </div>
    )
}

export default Home