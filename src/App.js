import React from 'react';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './auth/SignIn';
import Dashboard from './books/Dashboard';
import BookDetails from './books/BookDetails';
import DonateBook from './books/DonateBook';
import Overview from './books/Overview';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/myacc" component={Overview}></Route>
          <Route path="/viewbook/:id" component={BookDetails}></Route>
          <Route path="/donate" component={DonateBook}></Route>
          <Route path="/books" component={Dashboard}></Route>

        </Switch>
        </div>
    </Router>
  );
}

export default App;
