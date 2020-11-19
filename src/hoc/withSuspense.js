import React from 'react';

export const withSuspense = (Component) => {

  return (props) => {
    return (
      <React.Suspense fallback={'Loading...'}>
        <Component {...props} />
      </React.Suspense>
    )
  }
};
