import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import KanbanBoard from '../Kanban/KanbanBoard'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import LoginForm from '../Members/LoginForm';
import ConfigScreen from '../Configuration/ConfigScreen'
import Chat from '../Chat/Chat';



class Contents extends Component {

    render() {
        console.log("Contents render==>", this.props.member)
        return (
            <div style={{ minHeight: '100%', display: 'flex' }}>

                {/* <KanbanBoard /> */}
                <Router>
                    < Sidebar />

                    <Switch>
                        <Route exact path="/" component={KanbanBoard} />
                        <Route path="/kanban" component={KanbanBoard} />
                        <Route path="/chat" component={Chat} />
                        <Route path="/config" component={ConfigScreen} />
                    </Switch>


                </Router>

            </div>
        )

    }
}
const mapStateToProps = state => ({
    member: state.members.member,
})

export default connect(mapStateToProps)(Contents);


