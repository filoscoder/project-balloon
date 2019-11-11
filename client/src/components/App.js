import React, { Component } from 'react'
import './App.css'
import LoginForm from './Members/LoginForm'
import Contents from './Contents/Contents'
import { connect } from 'react-redux'
import { setUser, checkSession } from '../store/actions/members'


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
    const { dispatch, member } = this.props;
    const user = sessionStorage.getItem('user');
    dispatch(setUser(user))
    // dispatch(checkSession())

    //const sess = dispatch(checkSession());
    // console.log("sess", sess)

    console.log("APP render", member !== '', member, "session=>", user)
    return (
      <div>
        {member ? <Contents /> : <LoginForm />}

      </div>

    )
  }
}
const mapStateToProps = state => ({
  member: state.members.member,
})






export default connect(mapStateToProps)(App) 
