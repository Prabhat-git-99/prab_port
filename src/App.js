import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Education from './pages/EducationPage';
import Project from './pages/ProjectPage';
import Error from './pages/ErrorPage';
import Skills from './pages/SkillPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/education' exact component={Education} />
        <Route path='/project' exact component={Project} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/contact' exact component={Contact} />
        <Route component={Home} />
      </Switch>
      </>
    )
  }
}
