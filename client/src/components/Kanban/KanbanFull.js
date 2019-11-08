import React, { Component } from 'react'
import KanbanList from './KanbanList'
import styled from 'styled-components'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { get_kanbanList, add_list } from '../../store/actions/Kanban/kanbanList'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Textarea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width : 100%;
    max-width:1300px;
    
    
    
`;
const styles = {

    // Card 추가 버튼 관련
    addIcon: {
        display: 'inline-block',
        textAlign: 'right',
        paddingTop: 30,
        paddingBottom: 30
    },
    //ADD CARD, CANCEL 버튼 관련
    formButtonGroup:
    {
        marginTop: 8,
        display: "flex",
        justifyContent: 'center',
    }
}




class KanbanFull extends Component {
    state = {
        text: '',
        newListOpen: false,
    }

    // static propTypes = {
    //     get_kanbanList: PropTypes.func.isRequired,
    //     kanbans: PropTypes.array.isRequired,

    // }

    openForm = () => {
        this.setState({
            newListOpen: true,
        })
    }
    closeForm = () => {
        this.setState({
            newListOpen: false,
        })
        const text = this.state.text;
        if (text) {
            this.setState({
                text: ""
            })

        }
    }
    //text창에 글씨 입력될때마다 text value값 변경.
    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    //newList 추가했을때
    addNewList = (e) => {
        console.log("=>addNewList 호출 props", this.props)
        e.preventDefault();
        console.log(this.state.text)
        this.props.add_list(this.state.text)
        this.closeForm()
    }

    // inputFrom 렌더링
    addInputForm = () => {
        console.log("addInputForm 호출")
        const placeholder = "Enter a title for this card..."

        return (
            <div >
                <form>
                    <Card style={{
                        overflow: "visible",
                        minHeight: 50,
                        minWidth: 272,
                        padding: '6px 8px 2px'
                    }

                    }>

                        <Textarea placeholder={placeholder} name="newList" autoFocus value={this.state.text}
                            onChange={this.handleInputChange} style={{
                                resize: "none",
                                width: "100%", outline: "none", border: "none", overflow: "hidden"
                            }}
                        ></Textarea>
                    </Card>

                    <div style={styles.formButtonGroup}>
                        <Button onClick={this.addNewList}

                            variant="contained" style={{
                                color: "white", backgroundColor: "#5aac44", marginRight: 4, marginLeft: 4
                            }}>ADD List</Button>

                        <Button
                            onMouseDown={this.closeForm}
                            variant="contained" style={{ color: "white", backgroundColor: "#f44336de", marginRight: 4, marginLeft: 4 }}>CANCEL</Button>
                    </div>
                </form>

            </div>
        )
    }


    getTitle = (projects, project_id) => {

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
        // console.log(" KanbanFull shouldComponentUpdate=>", nextProps.project_id, this.props.project_id, nextProps.project_id === this.props.project_id, nextProps, this.props.projects.currentPjtId)
        // console.log(" KanbanFull shouldComponentUpdate=>", "nextProps:", nextProps, "nextState:", nextState)


        if (nextProps.project_id !== this.props.project_id) {
            this.props.get_kanbanList(nextProps.project_id);
        }

        return true;
    }

    render() {
        let newList
        const { kanbans, projects, project_id } = this.props
        if (this.state.newListOpen) {
            newList = this.addInputForm()
        }
        console.log("KanbanFull render ==> props", kanbans, projects, project_id)
        return (
            <div >

                {projects.projectlists ? <h1 style={{ textAlign: "center" }}>{this.getTitle(projects.projectlists, project_id)}</h1> : null}

                <div style={{ marginBottom: 8, marginRight: 20, textAlign: 'right' }} >
                    <Fab onClick={this.openForm} variant="extended" size="medium" color="secondary"
                        aria-label="add">
                        <AddIcon />
                        New List
                     </Fab>

                </div>

                <div style={{ display: 'table', margin: 'auto', paddingLeft: 8 }}>


                    <ListContainer>
                        {(kanbans[0].category === 'No List yet') ?
                            <h2> No List yet {<br />}
                                Make your List </h2> :
                            kanbans.map((kanban, index) =>
                                <KanbanList listId={kanban.id} key={kanban.id} category={kanban.category} cards={kanban.cards} index={index} project_id={this.props.project_id}></KanbanList>
                            )
                        }



                        {/* {kanbans.map((kanban, index) =>
                        <KanbanList listId={kanban.id} key={kanban.id} category={kanban.category} cards={kanban.cards} index={index} project_id={this.props.project_id}></KanbanList>
                    )} */}


                        {newList}



                    </ListContainer>
                </div>
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
    },
    add_list: (category) => {
        dispatch(add_list(category))
        console.log("dispatch : add_list =>", category)
    }


})


export default connect(mapStateToProps, dispatchToProps)(KanbanFull);