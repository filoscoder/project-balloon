import { GET_PROJECTLIST, CHANGE_PROJECTID } from './index'


export const get_projectList = (memberID) => dispatch => {
    console.log("get_projectList 호출")
    return (
        fetch(`/projectList/${memberID}`)
            .then(res => res.json())
            .then(projectlists => {
                if (projectlists.length > 0) {
                    dispatch({
                        type: GET_PROJECTLIST,
                        payload: { projectlists: projectlists, cnt: projectlists.length, currentPjtId: projectlists[0].project_id }
                    })
                } else {
                    dispatch({
                        type: GET_PROJECTLIST,
                        payload: { projectlists: projectlists, cnt: projectlists.length }
                    })
                }

            }


            )

    )
}

export const change_projectId = (currentPjtId) => {


    return (

        { type: CHANGE_PROJECTID, payload: currentPjtId }
    )
}