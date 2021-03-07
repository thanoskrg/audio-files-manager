import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="flex justify-between items-center bg-black fixed w-100 ph4 pv3 bb b--black-05"
    >
      <nav className="f4 fw6">
        <Link
          to="/"
          className="link dim gold dib mr4"
        >
          Home
        </Link>
        <Link
          to="/files"
          className="link dim gold dib"
        >
          Sound Files
        </Link>
      </nav>
      <aside className="flex items-center">
        <img
          src="https://i.pravatar.cc/150?img=10"
          className="br-100 h3 w3 dib mr3"
          alt="avatar"
        />
        <span className="gold f4 fw6">Nai Palm</span>
      </aside>
    </header>
  );
}

export default Header;