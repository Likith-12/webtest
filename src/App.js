import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Events from './pages/Events';
// import AddPost from './admin/AddPost';
import './App.scss';
import Navbar from './components/Navbar';
import Admin from './admin/Admin';

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/blog/:slug">
            <Blog />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          {/* <Route path="/events">
            <Events />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/events">
            <Events />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
