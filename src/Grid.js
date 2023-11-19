import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/dog.jpg';
import img2 from './img/Child.jpg';
import img3 from './img/bird.jpg';

const Grid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={img1} className="card-img-top" alt="Dog image" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is a simple card in a responsive grid layout.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="Child image" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is another card in the grid.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={img3} className="card-img-top" alt="Bird image" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">One more card in the layout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid