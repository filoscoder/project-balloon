import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from '../store'
import KanbanBoard from './Kanban/KanbanBoard'
import Sidebar from './Sidebar/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './Members/LoginForm'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <Route exact path="/" component={LoginForm} />
            <Switch>
              <Route path="/kanban/:name" component={KanbanBoard} />
              <Route path="/kanban" component={KanbanBoard} />
            </Switch>
          </Router>
          {/* 
          <Sidebar />
          <KanbanBoard /> */}
        </div>




      </Provider>
    )
  }
}

export default App
