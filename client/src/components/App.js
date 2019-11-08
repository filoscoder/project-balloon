import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from '../store'

// import { BrowserRouter as Router } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import LoginForm from './Members/LoginForm'
import Contents from './Contents/Contents'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <div className="app"> */}
        {/* <Router>
            <Route exact path="/" component={LoginForm} />
            <Switch>
              <Route path="/kanban/:name" component={KanbanBoard} />
              <Route path="/kanban" component={KanbanBoard} />
            </Switch>
          </Router> */}
        {/* 
          <Sidebar />
          <KanbanBoard /> */}
        <div>
          <Contents />
        </div>




      </Provider>
    )
  }
}

export default App
