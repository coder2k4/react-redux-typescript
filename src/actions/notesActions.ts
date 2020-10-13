export type Actions = { type: "ADD_NOTE", payload: string }

export const addNote = (note: string): Actions => ({
    type: "ADD_NOTE",
    payload: note
})