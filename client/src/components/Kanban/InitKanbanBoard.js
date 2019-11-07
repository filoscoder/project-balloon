import React, { Component } from 'react';
import './InitKanbanBoard.css'
import Logo from '../resources/icons/logo.png'
import Project from '../resources/icons/project.png'
import NewProject from '../resources/icons/new-project.png'
import { connect } from 'react-redux';
import { add_newProject } from '../../store/actions/Kanban/projectList';
class InitKanbanBoard extends Component {

    newProjectId = () => {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let date = today.getDate()
        let hour = today.getHours()
        let min = today.getMinutes()
        let sec = today.getSeconds()

        if (month < 10) {
            month = "0" + month
        }
        if (date < 10) {
            date = "0" + date
        }
        if (hour < 10) {
            hour = "0" + hour
        }
        if (min < 10) {
            min = "0" + min
        }

        return (year + "" + month + "" + date + "" + hour + "" + min + "" + sec + "-" + "1")
    }

    handleClickOpen = () => {
        const newProjectId = this.newProjectId()
        const { dispatch } = this.props;

        dispatch(add_newProject(newProjectId))

    }
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

                    <div className="form-new-project">
                        <img style={{ cursor: 'pointer' }} src={NewProject} alt="new-project" onClick={this.handleClickOpen} />
                    </div>

                </div>

            </div>
        )
    }
}

export default connect()(InitKanbanBoard);