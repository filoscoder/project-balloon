import { SET_USER } from './constants';


export const setUser = (email) => {
    console.log("action setUser() 호출", email)
    return (
        { type: SET_USER, payload: email }

    )
}


