import { GET_MEMBERS } from './constants';

export const getMembers = () => dispatch => {
    console.log("getMembers() 호출")
    return fetch('/members')
        .then(res => res.json())
        .then(members => dispatch({ type: GET_MEMBERS, payload: members }))
        .then(payload => console.log("getMembers payload:", payload))
}


