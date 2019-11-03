import { GET_KANBANLIST, ADD_CARD } from "../../actions/Kanban";

const initailState = [{
    category: "No List yet",
    cards: [],
    id: `list-00`
}]

const kanbanReducer = (state = initailState, action) => {
    console.log("==>kanbanReducer state ", state)
    console.log("==>kanbanReducer action.type", action.type)
    console.log("==>kanbanReducer action.type", action.payload)

    switch (action.type) {
        // 전체 LIST 가져오기
        case GET_KANBANLIST:

            let kanbanList = []
            if (((action.payload).length) !== 0) {
                kanbanList = action.payload
            } else kanbanList = initailState

            console.log("=> listReducer,GET_KANBANLIST 결과", kanbanList)


            return kanbanList

        // new card 추가한 state 만들기
        // case ADD_CARD:
        //     const newCard = {
        //         content: action.payload.text,
        //         id: `card-${}`
        //     }

        default: return state
    }


}

export default kanbanReducer;