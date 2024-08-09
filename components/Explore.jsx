import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <sectoion id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore Books</button>
          </Link>
        </div>
      </div>
    </sectoion>
  );
};

export default Explore;
