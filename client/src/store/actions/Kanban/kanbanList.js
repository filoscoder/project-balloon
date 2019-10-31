import { GET_KANBANLIST } from './index';

export const get_kanbanList = () => dispatch => {
    console.log("get_kanbanList 호출")
    return (
        fetch('/kanbanList')
            .then(res => res.json())
            .then(lists => dispatch({ type: GET_KANBANLIST, payload: lists }))

    )


}