import './RightSide.css'

const RightSide = () => {
  return (
    <div className="rightside">
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

export default RightSide