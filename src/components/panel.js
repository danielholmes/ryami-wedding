import React from 'react';

export default ({children, className}) => {
  return <div className={`panel ${className}`}>{children}</div>;
}
