import React, {ChangeEvent, useState} from 'react';

interface NoteInputProps {
    addNote(note: string): void
}


const NoteInput: React.FC<NoteInputProps> = ({addNote}) => {

    const [note, setNote] = useState('')

    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <div>
            <input type="text" name="note" placeholder="Note" value={note} onChange={updateNote}/>
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    );
};

export default NoteInput;