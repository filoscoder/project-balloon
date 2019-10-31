import React, { Component } from 'react'
import KanbanList from './KanbanList'
import styled from 'styled-components'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { get_kanbanList } from '../../store/actions/Kanban/kanbanList'

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


class KanbanFull extends Component {

    static propTypes = {
        get_kanbanList: PropTypes.func.isRequired,
        kanbans: PropTypes.array.isRequired,

    }

    componentDidMount() {
        this.props.get_kanbanList();
    }

    render() {
        const { kanbans } = this.props
        console.log(kanbans)
        return (
            <ListContainer>
                {kanbans.map((kanban, index) =>
                    <KanbanList listID={kanban.id} key={kanban.id} category={kanban.category} cards={kanban.cards} index={index}></KanbanList>
                )}


            </ListContainer>

        )
    }
}

const mapStateToProps = state => ({
    kanbans: state.kanbans
})


const dispatchToProps = (dispatch) => ({
    get_kanbanList: () => dispatch(get_kanbanList()),

})


export default connect(mapStateToProps, dispatchToProps)(KanbanFull);