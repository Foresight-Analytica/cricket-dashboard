import React from 'react'
import './HighImpactMoment.css'

const HighImpactMoment = () => {
  return (
    <div className="page-content">
      <div className="card">
        <div className="card-title">High Impact Moment</div>
        <div className="card-content">Content of the High Impact Moment card</div>
      </div>

      <div className="card">
        <div className="card-title">Wicket Statistics</div>
        <div className="card-content">
          <div className="row">
            <div className="col">
              <div className="card-info">Boundary</div>
            </div>
            <div className="col">
              <div className="card-info">Boundary Percentage</div>
            </div>
            <div className="col">
              <div className="card-info">Wicket Falling</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighImpactMoment