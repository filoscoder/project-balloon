import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
// import Customers from './components/Customer/customers'
import KanbanBoard from './components/Kanban/KanbanBoard'
import styled from 'styled-components'



class App extends Component {

  render() {
    return (
      <Provider store={store}>



        {/* <Customers /> */}
        <KanbanBoard />


      </Provider>
    )
  }
}

export default App
