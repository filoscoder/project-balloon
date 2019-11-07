import React, { Component } from 'react'
import KanbanList from './KanbanList'
import styled from 'styled-components'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { get_kanbanList } from '../../store/actions/Kanban/kanbanList'

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


class KanbanFull extends Component {


    static propTypes = {
        get_kanbanList: PropTypes.func.isRequired,
        kanbans: PropTypes.array.isRequired,

    }

    getTitle = (projects, project_id) => {
        //console.log("getTitle 호출:", projects, project_id)
        let title = null

        if ((Object.keys(projects).length) > 0) {

            projects.map(project => {
                if (project.project_id === project_id) {
                    title = project.project_name
                }
            })
        }
        return title

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log(" KanbanFull shouldComponentUpdate=>", nextProps.project_id, this.props.project_id, nextProps.project_id === this.props.project_id, nextProps, this.props.projects.currentPjtId)
        console.log(" KanbanFull shouldComponentUpdate=>", "nextProps:", nextProps, "nextState:", nextState)


        if (nextProps.project_id !== this.props.project_id) {
            this.props.get_kanbanList(nextProps.project_id);
        }

        return true;
    }

    render() {
        const { kanbans, projects, project_id } = this.props

        console.log("KanbanFull render ==> props", kanbans, projects, project_id)
        return (
            <div >

                {projects.projectlists ? <h1 style={{ textAlign: "center" }}>{this.getTitle(projects.projectlists, project_id)}</h1> : null}


                <ListContainer>

                    {kanbans.map((kanban, index) =>
                        <KanbanList listId={kanban.id} key={kanban.id} category={kanban.category} cards={kanban.cards} index={index} project_id={this.props.project_id}></KanbanList>
                    )}



                </ListContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    kanbans: state.kanbans,
    projects: state.projects,





})


const dispatchToProps = (dispatch) => ({

    get_kanbanList: (project_id) => {
        dispatch(get_kanbanList(project_id))
        console.log("dispatch : get_kanbanList =>", project_id)
    }

})


export default connect(mapStateToProps, dispatchToProps)(KanbanFull);