import { SET_USER, CHECK_SESSION } from './constants';



export const setUser = (email) => {
    console.log("action setUser() 호출", email)
    return (
        { type: SET_USER, payload: email }

    )
}

export const checkSession = () => dispatch => {
    console.log("action checkSession() 호출")
    return (
        fetch('/api/checksession')
            .then(response => response.json())
            .then(sess => {
                dispatch({
                    type: CHECK_SESSION,
                    payload: sess
                })

            }


            ))

}

