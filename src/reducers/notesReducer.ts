import {Actions} from "../actions/notesActions";

export interface NotesState {
    notes: string[]
}

const initialState = {
    notes: []
}


export const notesReducer = (state: NotesState = initialState, action: Actions) => {

    switch (action.type) {
        case "ADD_NOTE":
            return {...state, notes: [...state.notes, action.payload]}
        default:
            return state
    }
}