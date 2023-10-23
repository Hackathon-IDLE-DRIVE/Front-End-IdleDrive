import React from 'react';

const ContentContainer = ({ children }) => {
  return (
    <div style={{ padding: '16px' }}>
      {children}
    </div>
  );
};

export default ContentContainer;