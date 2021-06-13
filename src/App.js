import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Route>
          Hello React
        </Route>
      </Router>
    </div>
  );
};

export default App;
