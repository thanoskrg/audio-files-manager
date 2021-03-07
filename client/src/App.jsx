import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout';

import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
import SoundFilesPage from './containers/SoundFilesPage';

function App() {
  return (
    <HashRouter>
      <Header />
      <div id="page-container" className="w-100">
        <div className="pa4">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/files" component={SoundFilesPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
