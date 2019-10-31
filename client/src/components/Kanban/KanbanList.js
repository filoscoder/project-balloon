import React, { Component } from 'react'
import styled from 'styled-components'
import KanbanCard from './KanbanCard'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';
import Textarea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'


const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 8px;
width: 300px;
padding: 8px;
margin-right: 8px;
height: 100%;
`

const headerContainer = styled.div`
flex-direction: row;
`
const styles = {
    addIcon: {
        display: 'inline-block',
        textAlign: 'right',
        paddingTop: 30,
        paddingBottom: 30
    },
    formButtonGroup:
    {
        marginTop: 8,
        display: "flex",
        justifyContent: 'center',
    }
}





class KanbanList extends Component {
    state = {
        text: '',
        formOpen: false,
    }
    openForm = () => {
        this.setState({
            formOpen: true,
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false,
        })
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addInputForm = () => {
        console.log("addInputForm 호출")
        const placeholder = "Enter a title for this card..."

        return (
            <div >
                <Card style={{
                    overflow: "visible",
                    minHeight: 50,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }

                }>
                    {/* onBlur={this.closeForm} */}
                    <Textarea placeholder={placeholder} autoFocus value={this.state.text}
                        onChange={this.handleInputChange} style={{
                            resize: "none",
                            width: "100%", outline: "none", border: "none", overflow: "hidden"
                        }}
                    ></Textarea>
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        onMouseDown={this.handleAddCard}
                        variant="contained" style={{
                            color: "white", backgroundColor: "#5aac44", marginRight: 4, marginLeft: 4
                        }}>ADD CARD</Button>

                    <Button
                        onMouseDown={this.closeForm}
                        variant="contained" style={{ color: "white", backgroundColor: "#f44336de", marginRight: 4, marginLeft: 4 }}>CANCEL</Button>
                </div>

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


                </div>

            </ListContainer >

        )
    }
}

export default KanbanList;
