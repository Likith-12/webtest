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
import AnimatedCursor from "react-animated-cursor"
import Team from './pages/Team';

function App() {


  return (
    <div className="App">
        
       <AnimatedCursor
      innerSize={30}
      outerSize={15}
      color='50, 171, 150'
      outerAlpha={0.5}
      outerScale={3}
      trailingSpeed={10}
      
    />
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
          <Route path="/team">
           <Team></Team>
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
