import { GET_PROJECTLIST } from "../../actions/Kanban";

const initailState = [{
    project_id: "", project_name: "", project_image: ""
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




        default: return state
    }

}

export default projectReducer;