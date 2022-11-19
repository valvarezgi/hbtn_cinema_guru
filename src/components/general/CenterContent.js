import React from 'react';

const CenterContent = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default CenterContent;
