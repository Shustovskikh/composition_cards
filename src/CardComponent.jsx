import React from 'react';

const CardComponent = ({ title, text, imageSrc, children }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* Conditional image */}
      {imageSrc !== undefined ? (
        imageSrc ? (
          <img 
            src={imageSrc} 
            className="card-img-top" 
            alt="Card cap" 
            style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
          />
        ) : (
          <div 
            className="d-flex justify-content-center align-items-center" 
            style={{ width: '100%', height: '150px', backgroundColor: '#adb5bd' }}
          >
            Image cap
          </div>
        )
      ) : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {children}
      </div>
    </div>
  );
};

export default CardComponent;
