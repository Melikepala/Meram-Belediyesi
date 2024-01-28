import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card1({ image, title, description, buttonText, targetPath }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(targetPath);
  };

  return (
    <div className="card-body d-flex align-items-center">
      <img src={image} className="card-img-top me-10" alt="Card" />
      <div className="card-body-2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-success" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>

    </div>
  );
}

export default Card1;
