import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from '../store'
import KanbanBoard from './Kanban/KanbanBoard'
import Sidebar from './Sidebar/Sidebar'



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="app">

          <Sidebar />
          <KanbanBoard />
        </div>




      </Provider>
    )
  }
}

export default App
