import React, { Component } from 'react'
import './App.css'
import LoginForm from './Members/LoginForm'
import Contents from './Contents/Contents'
import { connect } from 'react-redux'
import { setUser, checkSession } from '../store/actions/members'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: ''

    }
  }


  componentDidMount() {
    console.log("App componentDidMount", this.props, this.state)
    this.checkClientSession()

  }

  checkClientSession = () => {

    checkSession()
      .then(function (response) {
        if (response) {
          //  console.log("^^^^^", response.payload)
          this.setState({
            session: response.payload
          })
        }

      }.bind(this))
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App shouldComponentUpdate", nextProps)
    if (nextProps.member !== this.props.member) {

      this.props.dispatch(setUser(nextProps.member))
      this.checkClientSession()
    }


    return true
  }


  render() {
    //console.log("APP render", this.props, this.state)
    const { dispatch, member } = this.props;
    dispatch(checkSession)
    console.log("APP render", member !== '', member, "session=>", this.state.session)
    return (
      <div>
        {this.state.session ? <Contents /> : <LoginForm />}

      </div>

    )
  }
}
const mapStateToProps = state => ({
  member: state.members.member,
})






export default connect(mapStateToProps)(App) 
