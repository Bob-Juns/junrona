import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@routes/Home';
import Detail from '@routes/Detail';

import GA4React from 'ga-4-react';

const trackingId = process.env.GA_TRACKING_ID;

const App = () => {
  useEffect(() => {
    trackingId && new GA4React(trackingId).initialize();
  }, [trackingId]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
