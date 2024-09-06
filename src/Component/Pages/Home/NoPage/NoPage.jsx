
import React from 'react';
import './NoPage.scss';

const NoPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404! ERROR</h1>
        <p className="not-found__message">Oops! Page Not Found.</p>
      </div>
    </div>
  );
};

export default NoPage;
