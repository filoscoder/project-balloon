import React, { Component } from 'react';
import InitKanbanBoard from './InitKanbanBoard'
import TopKanbanBoard from './TopKanbanBoard'
import KanbanFull from './KanbanFull'
import { get_projectList } from '../../store/actions/Kanban/projectList'
import { connect } from "react-redux"
import CreateKanbanBoard from './CreateKanbanBoard';





class KanbanBoard extends Component {

  // static propTypes = {
  //   get_projectList: PropTypes.func.isRequired,
  //   projects: PropTypes.object.isRequired,
  //}


  //project List가 없는 경우, InitKanbanBoard render / 
  //있는 경우 KanbanFull render
  renderKanban = () => {
    let KanbanBoard

    if (this.props.projects.cnt === 0) {
      KanbanBoard = <InitKanbanBoard />
    } else {

      let current_Id;

      if (this.props.projects.projectlists !== undefined) {
        if (this.props.projects.currentPjtId !== undefined) {
          current_Id = this.props.projects.currentPjtId
        }
        else current_Id = this.props.projects.projectlists[0].project_id

        console.log("CreateKanbanBoard renderKanban 호출 current_Id", current_Id)
      }

      KanbanBoard = <KanbanFull project_id={current_Id} />
    }
    return KanbanBoard
  }

  componentDidMount() {
    console.log("KanbanBoard render componentDidMount")
    this.props.get_projectList();
  }

  render() {
    const { projects } = this.props
    console.log("==>KanbanBoard render props:", projects)

    return (
      <div style={{ width: '100%' }}>
        <TopKanbanBoard pjtList={projects.projectlists} cnt={projects.cnt} />
        <br />
        {this.renderKanban()}

        {projects.open ? <CreateKanbanBoard open={projects.open} project_id={projects.newPjtId} /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects,

})


const dispatchToProps = (dispatch) => ({
  get_projectList: () => dispatch(get_projectList('1')),

})


export default connect(mapStateToProps, dispatchToProps)(KanbanBoard);
