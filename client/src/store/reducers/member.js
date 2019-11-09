
import { SET_USER } from '../actions/constants'

const initailState = {
    member: ''
}

const memberReducer = (state = initailState, action) => {
    switch (action.type) {
        case SET_USER: {

            const newState = { ...state, member: action.payload }

            console.log("memberReducer SET_USER ,action.payload:", newState)
            return newState
        }

        default:
            return state
    }
}


export default memberReducer;