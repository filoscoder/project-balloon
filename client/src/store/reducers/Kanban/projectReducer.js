import { GET_PROJECTLIST, CHANGE_PROJECTID, ADD_NEWPROJECT, CANCEL_NEWPROJECT } from "../../actions/Kanban";

const initailState = [{
    projectlists: {
        project_id: "", project_name: "", project_image: ""
    },
    cnt: 0,
    currentPjtId: "",
    open: false
}]

const projectReducer = (state = initailState, action) => {

    console.log("==>projectReducer action.type", action.type)
    console.log("==>projectReducer action.type", action.payload)
    switch (action.type) {

        case GET_PROJECTLIST: {


            // let projectList = []
            const newState = { ...state, projectlists: action.payload.projectlists, cnt: action.payload.cnt }
            // if (((action.payload).length) !== 0) {




            // } else projectList = initailState


            console.log("=> projectReducer,GET_PROJECTLIST 결과", newState)
            return newState
        }
        case CHANGE_PROJECTID: {
            console.log("***************", state)

            const newState = { ...state, currentPjtId: action.payload }

            console.log("=> projectReducer,CHANGE_PROJECTID 결과", newState)
            return newState
        }
        case ADD_NEWPROJECT: {

            const newState = {
                ...state, open: true, newPjtId: action.payload
            }
            console.log("=> projectReducer,ADD NEW Project 결과", newState)
            return newState

        }
        case CANCEL_NEWPROJECT: {
            const newState = {
                ...state, open: false
            }
            console.log("=> projectReducer,CANCEL_NEWPROJECT 결과", newState)
            return newState
        }
        default: return state
    }

}

export default projectReducer;