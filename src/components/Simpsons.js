import React from "react";

const Simpsons = ({ simpson }) => {
  return (
    <div className="Simpsons">
      <img src={simpson.image} alt={simpson.character} />
      <h1>Name : {simpson.character}</h1>
      <p>Quote : {simpson.quote}</p>
    </div>
  );
};

export default Simpsons;
