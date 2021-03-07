import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-100 tc pv4">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link
        to="/"
        className="f3 fw6 link green dib mv3"
      >
        Return
      </Link>
    </div>
  );
};

export default NotFoundPage;