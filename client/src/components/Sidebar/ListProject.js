import React, { Component } from 'react';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"

const styles = {
    projectIcon: {
        backgroundColor: 'pink',
        cursor: 'pointer',
        opacity: '0.7px'
    },
};

class ListProject extends Component {


    render() {

        console.log("ListProject props", this.props)
        const { projects } = this.props
        return (
            <div className="ListProject" style={{
                display: 'flex',
                flexDirection: 'row',
            }} >
                {projects !== undefined ? projects.projectlists.map(project =>
                    <ListItemAvatar>
                        <Avatar
                            style={styles.projectIcon}
                            project_id={project.project_id}
                            onClick={this.changeProjectId}
                        >
                            {project.project_name[0]}
                        </Avatar>
                    </ListItemAvatar>
                ) : null}

                {/* {this.AddProjectList()} */}
            </ div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects,

})

export default connect(mapStateToProps)(ListProject);