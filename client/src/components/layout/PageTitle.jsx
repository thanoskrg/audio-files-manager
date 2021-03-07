import React from 'react';
import { string } from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <header className="w-100 mb5">
      <h2>{title}</h2>
    </header>
  );
};

PageTitle.propTypes = {
  title: string.isRequired
};

export default PageTitle;