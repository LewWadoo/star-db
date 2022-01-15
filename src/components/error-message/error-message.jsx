import React from 'react';
import girl from './girl.jpg';

import './error-message.css';

const ErrorMessage = () => {
    return (
        <div className="error-indicator">
          <img alt="error" src={girl} className="girl" />
          <span className="boom">BOOM!</span>
          <span>Something has gone terribly wrong!</span>
          <span>But we already sent droids to fix it!</span>
        </div>
    );
};

export default ErrorMessage;
