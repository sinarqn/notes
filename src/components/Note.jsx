import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'
import { useState } from 'react'

function Note({ note, handleDelete, darkMode }) {
    const [delDialog, setDelDialog] = useState(false)

    const showDelDialog = () => {
        setDelDialog(true)
    }

    return (
        <NoteWrapper style={{ backgroundColor: note.color }} className={darkMode ? 'dark' : null}>
            <p>{note.text}</p>
            <div className="footer">
                <small>{note.date}</small>
                <MdDeleteForever
                    onClick={showDelDialog}
                    className="delete-icon" />
            </div>
            <div className={delDialog ? "del-dialog show" : "del-dialog"}>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
                <button onClick={() => setDelDialog(false)}>Cancel</button>
            </div>
        </NoteWrapper>
    )
}

const NoteWrapper = styled.div`
    background-color: var(--light-clr);
    color: white;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0 0 0 / .2);
    position: relative;

    .footer{
        display: flex;
        justify-content: space-between;

        small{
            opacity: .6;
            font-size: .7rem;
        }
        .delete-icon{
            font-size: 1.5rem;
        }
    }
    .del-dialog{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: rgba(0 0 0 / .8);
        border-radius: inherit;
        transition: all .3s ease;
        transform: scaleY(0);

        &.show{
            transform: scaleY(1);
        }
        button{
            border: none;
            padding: .5rem 2rem;
            font-weight: bold;
            border-radius: 5px;
            color: #eee;

            :nth-child(1){
                background-color: crimson;
            }
            :nth-child(2){
                background-color: #00a5e1;
            }
        }
    }
    &.dark{
        filter: contrast(.8);
        color: #fff;

        button{
            color: #000;
        }
    }
`

export default Note
