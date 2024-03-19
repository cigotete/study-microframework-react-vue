import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory(); // copy browser history

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        console.log(nextPathName);
        history.push(nextPathName);
      },
    });
  });

  return <div ref={ref} />;
};
