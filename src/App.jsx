import React from 'react';
import CardComponent from './CardComponent';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* card without image */}
        <div className="col-md-6">
          <CardComponent
            title="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
          >
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </CardComponent>
        </div>

        {/* card with image or "Image cap" */}
        <div className="col-md-6">
          <CardComponent
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            imageSrc={null}  // Image cap
          >
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default App;
