import { GET_PROJECTLIST } from './index'
import projectReducer from '../../reducers/Kanban/projectReducer'

export const get_projectList = (memberID) => dispatch => {
    console.log("get_projectList 호출")
    return (
        fetch(`/projectList/${memberID}`)
            .then(res => res.json())
            .then(projectlists => dispatch({
                type: GET_PROJECTLIST,
                payload: { projectlists: projectlists, cnt: projectlists.length }
            })
            )

    )
}