import React, { Component } from 'react';
import './InitKanbanBoard.css'
import Logo from '../resources/icons/logo.png'
import Project from '../resources/icons/project.png'
import AddKanbanBoard from './AddKanbanBoard';

class InitKanbanBoard extends Component {



    render() {
        return (
            <div>


                <div className="form">

                    <div className="form-logo">
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="form-project">
                        <div className="img-project">
                            <img src={Project} alt="project" />
                        </div>
                        <div className="content-project">
                            Welcome back!<br />
                            Please login to your account
                            </div>
                    </div>

                    <AddKanbanBoard />

                </div>

            </div>
        )
    }
}

export default InitKanbanBoard;