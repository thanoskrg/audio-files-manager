import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="w-100 tc pv4">
      <h1 className="near-black">Sound Files Manager</h1>
      <Link
        to="/files"
        className="f3 fw6 link green dib mv3"
      >
        View Files
      </Link>
    </div>
  );
};

export default HomePage;