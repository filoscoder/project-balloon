import React, { Component } from 'react';
//import './TopKanbanBoard.css'
import Setting from '../resources/icons/setting.png'
import TopAddKanbanBoard from './TopAddKanbanBoard';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import NewProject from '../resources/icons/new-project.png'
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const styles = {
    pjtbuttonBox: {

        flexWrap: 'wrap',
        display: 'inline-block',
        margin: 8,

    },


    newpjtbuttom: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 8
    },

    topBar: {
        backgroundColor: '#4cc3c3',
        height: 80
    },

    setting: {
        float: "right",
        marginRight: 20,
    },

    settingImg: {
        width: 40,
        height: 40,
        marginTop: 20
    }




}

class TopKanbanBoard extends Component {
    constructor(props) {
        super(props)
        console.log("TopKanbanBoard Constructor =>", props)
    }

    // Project 있는 경우, Project List 뿌려주기.
    getProjectList = () => {
        let pjtList;
        console.log(" TopKanbanBoard getProjectList 호출", this.props.pjtList)
        const projectList = this.props.pjtList
        if (this.props.cnt > 0) {

            pjtList = projectList.map(project => {
                return (
                    <div style={styles.pjtbuttonBox} >
                        <Chip key={project.project_id} project_id={project.project_id}
                            avatar={<Avatar>{project.project_image}</Avatar>}
                            label={project.project_name}
                            clickable
                            color="primary"
                            // onClick={get_kanbanList}
                            deleteIcon={<DoneIcon />}
                        />
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
                    {this.getProjectList()}


                    <img style={styles.newpjtbuttom} src={NewProject} alt="new-project" onClick={this.handleClickOpen} />

                    <div style={styles.setting}>
                        <img src={Setting} alt="setting" style={styles.settingImg} />
                    </div>
                </div>

            </div>
        )
    }
}

export default TopKanbanBoard;