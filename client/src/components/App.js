import React, { Component } from 'react'
import './App.css'
import LoginForm from './Members/LoginForm'
import Contents from './Contents/Contents'
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount() {
    console.log("componentDidMount", this.props)


  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps)
    return true
  }


  render() {
    console.log("APP render", this.props)
    const { member } = this.props;
    const user = sessionStorage.getItem('user');
    console.log("APP render", member !== '', member, "session=>", user)
    return (
      <div>
        {user ? <Contents /> : <LoginForm />}
        {/* <LoginForm/> */}
        {/* <Contents /> */}
      </div>

    )
  }
}
const mapStateToProps = state => ({
  member: state.members.member,
})





export default connect(mapStateToProps)(App) 
