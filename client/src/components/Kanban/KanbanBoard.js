import React, { Component } from 'react';
import InitKanbanBoard from './InitKanbanBoard'
import TopKanbanBoard from './TopKanbanBoard'
import KanbanFull from './KanbanFull'
import { get_projectList } from '../../store/actions/Kanban/projectList'
import { connect } from "react-redux"





class KanbanBoard extends Component {

  // static propTypes = {
  //   get_projectList: PropTypes.func.isRequired,
  //   projects: PropTypes.object.isRequired,

  // }
  constructor(props) {
    super(props)
    this.state = {
      project_id: this.props.current_pjtID

    }
    console.log("****************", this.state.project_id)

  }


  //project List가 없는 경우, InitKanbanBoard render / 
  //있는 경우 KanbanFull render
  renderKanban = () => {

    let KanbanBoard
    if (this.props.projects.cnt === 0) {
      KanbanBoard = <InitKanbanBoard />
    } else {
      KanbanBoard = <KanbanFull project_id={this.props.projects.currentPjtId} />
    }
    return KanbanBoard
  }

  componentDidMount() {
    this.props.get_projectList();
  }
  render() {

    console.log("==>KanbanBoard render props:", this.props.projects.projectlists)

    return (
      <div>
        <TopKanbanBoard pjtList={this.props.projects.projectlists} cnt={this.props.projects.cnt} />
        <br></br>
        {this.renderKanban()}

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
