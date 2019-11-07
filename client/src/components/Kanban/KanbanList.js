import React, { Component } from 'react'
import styled from 'styled-components'
import KanbanCard from './KanbanCard'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';
import Textarea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import { get_kanbanList } from '../../store/actions/Kanban/kanbanList';



const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 8px;
width: 300px;
padding: 8px;
margin-right: 8px;
height: 100%;
`
// material UI 스타일 정의
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





class KanbanList extends Component {

    //초기 state
    state = {
        text: '',
        formOpen: false,
    }

    //추가 form render 상태 옵션
    openForm = () => {
        this.setState({
            formOpen: true,
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false,
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

    // 새로운 카드 DB추가
    addNewCard = (e) => {
        console.log("=>addNewCard 호출 props", this.props)
        e.preventDefault();
        const { dispatch, category, project_id } = this.props

        let data = {
            category: category,
            content: e.target.newCard.value,
            project_id: project_id
        }

        if (data.content !== undefined && data.content !== null && data.content !== '') {
            console.log(data)
            fetch('/newCard', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
                .then(data => console.log(data, "입력성공"))
                .then(dispatch(get_kanbanList(project_id)))
                .then(this.closeForm())

        }







    }

    //ADD CARD 버튼 눌렀을때.
    handleAddCard = () => {

        console.log("=>handleAddCard 호출")
        console.log("=>handleAddCard ", this.props)
        const { dispatch, listID } = this.props;
        console.log(dispatch, listID)
        const text = this.state.text;
        console.log("=>handleAddCard ", text)


        if (text) {
            this.setState({
                text: ""
            })
            //dispatch(addCard(listID, text))
        }
    }


    // InputFrom rendering 형식
    addInputForm = () => {
        console.log("addInputForm 호출")
        const placeholder = "Enter a content for this card..."

        return (
            <div >
                <form onSubmit={this.addNewCard}>
                    <Card style={{
                        overflow: "visible",
                        minHeight: 50,
                        minWidth: 272,
                        padding: '6px 8px 2px'
                    }

                    }>
                        {/* onBlur={this.closeForm} */}
                        <Textarea placeholder={placeholder} name="newCard" autoFocus value={this.state.text}
                            onChange={this.handleInputChange} style={{
                                resize: "none",
                                width: "100%", outline: "none", border: "none", overflow: "hidden"
                            }}
                        ></Textarea>
                    </Card>
                    {/* onMouseDown={this.handleAddCard} */}
                    <div style={styles.formButtonGroup}>
                        <Button type="submit"

                            variant="contained" style={{
                                color: "white", backgroundColor: "#5aac44", marginRight: 4, marginLeft: 4
                            }}>ADD CARD</Button>

                        <Button
                            onMouseDown={this.closeForm}
                            variant="contained" style={{ color: "white", backgroundColor: "#f44336de", marginRight: 4, marginLeft: 4 }}>CANCEL</Button>
                    </div>
                </form>

            </div>
        )
    }

    render() {
        const cards = this.props.cards
        const listID = this.props.listID
        let newCard;
        console.log("props.card=>", cards)
        if (this.state.formOpen) {
            newCard = this.addInputForm()
        }
        return (
            < ListContainer >


                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <h4 >{this.props.category}  </h4>
                        </Grid>
                        <Grid item xs={12} sm={6} style={styles.addIcon}>
                            <AddCircleOutlineIcon listID={listID} onClick={this.openForm} style={{ cursor: "pointer" }} />
                        </Grid>

                    </Grid>

                </div>
                {cards.map((card, index) =>
                    <KanbanCard title={card.title} id={card.id} key={index} content={card.content} />
                )}

                {newCard}




            </ListContainer >

        )
    }
}

export default connect()(KanbanList);
