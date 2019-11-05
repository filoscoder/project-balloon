import { GET_PROJECTLIST, CHANGE_PROJECTID } from "../../actions/Kanban";

const initailState = [{
    projectlists: {
        project_id: "", project_name: "", project_image: ""
    },
    cnt: 0,
    currentPjtId: ""
}]

const projectReducer = (state = initailState, action) => {

    console.log("==>projectReducer action.type", action.type)
    console.log("==>projectReducer action.type", action.payload)
    switch (action.type) {

        case GET_PROJECTLIST:
            let projectList = []
            if (((action.payload).length) !== 0) {
                projectList = action.payload

            } else projectList = initailState
            console.log("=> projectReducer,GET_PROJECTLIST 결과", projectList)
            return projectList

        case CHANGE_PROJECTID:
            console.log("***************", state)

            let newState = { ...state, currentPjtId: action.payload }

            console.log("=> projectReducer,CHANGE_PROJECTID 결과", newState)
            return newState

        default: return state
    }

}

export default projectReducer;