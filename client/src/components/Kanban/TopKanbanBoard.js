import React, { Component } from 'react';
import Setting from '../resources/icons/setting.png'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NewProject from '../resources/icons/new-project.png'
import { connect } from "react-redux"
import { change_projectId } from '../../store/actions/Kanban/projectList';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';



const styles = {
    pjtbuttonBox: {

        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        marginTop: 0

    },



    topBar: {
        backgroundColor: '#4cc3c3',
        height: 80
    },

    setting: {
        textAlign: "right",
        paddingTop: 20,
        paddingRight: 10,

    },

    settingImg: {
        width: 40,
        height: 40,


    },
    button: {
        backgroundColor: '#4cc3c3',
    }




}

class TopKanbanBoard extends Component {
    constructor(props) {
        super(props)
        console.log("TopKanbanBoard Constructor =>", props)
    }

    changeProjectId = (e) => {
        const { dispatch } = this.props;
        console.log(" TopKanbanBoard changeProjectID 호출 ", e.target.getAttribute('style'))
        const project_id = e.target.getAttribute('project_id')
        dispatch(change_projectId(project_id))



    }



    // Project 있는 경우, Project List 뿌려주기.
    AddProjectList = () => {
        let pjtList;

        const projectList = this.props.pjtList

        if (Object.length.projectList !== 0) {
            console.log(" TopKanbanBoard AddProjectList 호출", typeof projectList, projectList)
        }

        if (this.props.cnt > 0) {

            pjtList = projectList.map(project => {
                return (
                    <div project_id={project.project_id} key={project.project_id} onClick={this.changeProjectId} >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: 'pink', cursor: 'pointer', opacity: 0.7 }} project_id={project.project_id} ></Avatar>
                        </ListItemAvatar>
                        {project.project_name}
                    </div>
                )


            })
            return pjtList
        }

    }


    render() {
        console.log(">>>>>>>>>>", this.props)

        return (

            <div className="top-form" style={styles.topBar}>

                <div className="top-form-project" >

                    <Grid container >
                        <Grid item xs={12} sm={6} style={styles.pjtbuttonBox} >

                            {this.AddProjectList()}
                            {/* <img style={styles.newpjtbuttom} src={NewProject} alt="new-project" onClick={this.handleClickOpen} /> */}

                            <Avatar style={{ backgroundColor: 'pink', cursor: 'pointer', }} onClick={this.handleClickOpen} ><AddIcon /></Avatar>

                        </Grid>
                        <Grid item xs={12} sm={6} style={styles.setting}>
                            <img src={Setting} alt="setting" style={styles.settingImg} />
                        </Grid>

                    </Grid>


                </div>

            </div>
        )
    }
}

export default connect()(TopKanbanBoard);