import { GET_CHATLIST } from './index';

export const get_chatlist = (member_id) => dispatch => {
    console.log("action get_chatlist 호출")
    return (
        fetch(`/api/chats/${member_id}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                console.log("action get_chatlist myJson", myJson)
                return (dispatch({
                    type: GET_CHATLIST,
                    payload: myJson
                }))



            })
    )
}
