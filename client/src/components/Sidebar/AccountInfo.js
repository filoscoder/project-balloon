import React, { Component } from 'react';
import ListProject from './ListProject';
import { get_projectList } from '../../store/actions/Kanban/projectList';
import { connect } from "react-redux";

class AccountInfo extends Component {

    componentDidMount() {
        console.log("AccountInfo componentDidMount", this.props)
        //     this.props.get_projectList();
        // }

        // renderAccount(){

        //     const {projects} = this.props

        //     if(this.props.projects !== 'undefined'){ 
        //         return (<ListProject pjtList={projects.projectlists} cnt={projects.cnt}/>);

        //     } else {

        //         return null;
        //     }
    }

    render() {
        console.log(this.props)

        return (
            <div className="AccountInfo">
                <ListProject />
                {/* {this.rednerAcoount} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects,

})

// const dispatchToProps = (dispatch) => ({
//     get_projectList: () => dispatch(get_projectList('1')),

// })

export default connect(mapStateToProps)(AccountInfo);