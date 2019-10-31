import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
// import Customers from './components/Customer/customers'
import KanbanBoard from './components/Kanban/KanbanBoard'
import styled from 'styled-components'

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

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
