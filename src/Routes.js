import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import General from './pages/general';


const Main = (props) => {
  const user = useSelector(store => ({
    user: store.auth.user
  }), shallowEqual);

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route exact path="/" element={<General />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
