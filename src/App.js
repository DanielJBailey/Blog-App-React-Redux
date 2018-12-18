import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import NewBlog from './components/NewBlog';
import NavBar from './components/NavBar';
import './App.scss';

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/new" component={NewBlog} />
      <Route exact path="/blog/:id" component={Blog} />
    </Switch>
  </>
)

export default App;
