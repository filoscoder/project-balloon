
import { GET_MEMBERS } from '../actions/constants'



const memberReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MEMBERS:
            return action.payload
        default:
            return state
    }
}


export default memberReducer;