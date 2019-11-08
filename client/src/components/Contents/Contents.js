import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import KanbanBoard from '../Kanban/KanbanBoard'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class Contents extends Component {

    render() {
        return (
            <div style={{ minHeight: '100%', display: 'flex' }}>
                < Sidebar />
                <KanbanBoard />
                <Router>
                    <Switch>
                        <Route path="/kanban/:id" component={KanbanBoard} />
                        {/* <Route path="/chat/:id" component={Chat}/>
                        <Route path="/setting/:id" component={Setting}/> */}

                    </Switch>


                </Router>

            </div>
        )

    }
}

export default connect()(Contents);


