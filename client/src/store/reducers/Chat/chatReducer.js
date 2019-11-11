import { GET_CHATLIST } from '../../actions/Chat';

const initialState = [{
    room_id: "",
    users: [],
    messages: [{ user: "", date: "", message: "" }]
}]

const chatReducer = (state = initialState, action) => {
    console.log("==>chatReducer action.type", action.type)
    console.log("==>chatReducer action.type", action.payload)

    switch (action.type) {
        case GET_CHATLIST: {
            const newState = action.payload
            return newState
        }
        default: return state
    }

}

export default chatReducer;