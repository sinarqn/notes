import styled from 'styled-components'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({ notes, handleAddNote, handleDelete, darkMode }) => {

    return (
        <NotesListWrapper>
            <AddNote handleAddNote={handleAddNote} darkMode={darkMode} />
            <div className='notes'>
                {notes.map((note) =>
                    <Note
                        key={note.id}
                        note={note}
                        handleDelete={handleDelete}
                        darkMode={darkMode}
                    />
                )}
            </div>

        </NotesListWrapper>
    )
}

const NotesListWrapper = styled.div`

    .notes{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: .5rem;
    }
`

export default NotesList
