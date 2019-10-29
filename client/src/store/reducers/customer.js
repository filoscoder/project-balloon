import { GET_CUSTOMERS } from '../actions/constants'


const customerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.payload

    default:
      return state
  }
}



export default customerReducer;
