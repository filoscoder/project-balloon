import { GET_PROJECTLIST, CHANGE_PROJECTID, ADD_NEWPROJECT, CANCEL_NEWPROJECT } from './index'


export const get_projectList = (memberID) => dispatch => {
    console.log("get_projectList 호출")
    return (
        fetch(`/projectList/${memberID}`)
            .then(res => res.json())
            .then(projectlists => {
                dispatch({
                    type: GET_PROJECTLIST,
                    payload: { projectlists: projectlists, cnt: projectlists.length, open: false }
                })

            }

            )

    )
}

export const change_projectId = (currentPjtId) => {
    return (

        { type: CHANGE_PROJECTID, payload: currentPjtId }
    )
}

export const add_newProject = (currentPjtId) => {
    return (
        { type: ADD_NEWPROJECT, payload: currentPjtId }
    )
}

export const cancel_newProject = () => {
    return (
        { type: CANCEL_NEWPROJECT }
    )
}

