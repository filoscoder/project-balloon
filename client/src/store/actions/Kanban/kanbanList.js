import { GET_KANBANLIST, ADD_CARD } from './index';


export const get_kanbanList = (project_id) => dispatch => {
    console.log("get_kanbanList 호출")
    return (
        fetch(`/kanbanList/${project_id}`)
            .then(res => res.json())
            .then(lists => dispatch({ type: GET_KANBANLIST, payload: lists }))

    )
}

export const add_card = (text, listID) => dispatch => {
    console.log("add_card 호출")
    return (
        dispatch({
            type: ADD_CARD,
            payload: { text, listID }
        })
    )
}