import { GET_KANBANLIST } from "../../actions/Kanban";

const initailState = [{
    title: "No List yet",
    cards: [],
    id: `list-00`
}]

const kanbanReducer = (state = initailState, action) => {
    console.log("==>kanbanReducer state ", state)
    console.log("==>kanbanReducer action.type", action.type)
    console.log("==>kanbanReducer action.type", action.payload)

    switch (action.type) {
        case GET_KANBANLIST:
            const kanbanList = action.payload

            console.log("=> listReducer,GET_KANBANLIST 결과", kanbanList)

            return kanbanList
    }
    return state

}

export default kanbanReducer;