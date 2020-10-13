import React from 'react';
import NoteInput from './components/NoteInput'
import {useDispatch, useSelector} from "react-redux";
import {NotesState} from "./reducers/notesReducer";
import {addNote} from "./actions/notesActions";

function App() {


    const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
    const dispatch = useDispatch()

    const addNoteHandler = (note: string): void => {
        dispatch(addNote(note))
    }

    return (
        <>
            <NoteInput addNote={addNoteHandler}/>
            <hr/>
            <ul>
                {
                    notes.map((note) => <li key={note}>{note}</li>)
                }
            </ul>
        </>
    );
}

export default App;
