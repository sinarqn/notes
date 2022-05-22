import { useEffect, useState } from 'react'
import styled from 'styled-components'

function AddNote({ handleAddNote, darkMode }) {
  const colors = [
    '#00750a',
    '#b80000',
    '#a7009b',
    '#006ca5',
    '#968e00',
    '#212121'
  ]
  const [color, setColor] = useState(colors[0])
  const [noteText, setNoteText] = useState('');
  const charLimit = 300;

  useEffect(() => {
    document.querySelector('textarea').focus()
  }, [color])

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, color);
      setNoteText('');
    }
  }
  return (
    <AddNoteWrapper className={darkMode ? 'dark' : null}>
      <div className="colors">
        {colors.map((clr, index) => (<div
          key={index}
          className={color === clr ? 'color active' : 'color'}
          style={{ backgroundColor: clr }}
          onClick={() => setColor(clr)}
        ></div>))}
        </div>
        <textarea
          rows="5"
          placeholder="Type a new note..."
          onChange={handleChange}
          value={noteText}
          ></textarea>
          <div className="footer">
            <small>
              {charLimit - noteText.length} Remaining
            </small>
            <button
              onClick={handleSaveClick}
            >Save</button>
          </div>
    </AddNoteWrapper>
    )
}

const AddNoteWrapper = styled.div`
  border: 2px solid var(--primary-clr);
  border-radius: 5px;
  margin-bottom: 1rem;

  .colors{
    display: flex;
    gap: .5rem;
    padding: 1rem;

  .color{
    width: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
            
    ::after{
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: .5rem;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 1px solid black;
      background-color: #fff;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all .1s ease;
    }
  }
  .active{
    ::after{
      opacity: 1;
    }
  }
}
textarea{
  width: 100%;
  resize: none;
  padding: .5rem;
  outline: none;
  border: none;
  box-shadow: none;
  background-color: transparent;
  color: inherit;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;

  small{
    opacity: .5;
  }
}
button{
  background-color: var(--primary-clr);
  padding: .5rem 1.5rem;
  border-radius: 5px;
  outline: none;
  border: none;
  transition: all .3s ease;
  box-shadow: 0 0 5px rgba(0 0 0 / .2);
  color: white;
  cursor: pointer;

  :hover,:focus{
    background-color: var(--light-clr);
  }
}
  &.dark{
    color: #eee;
    border-color: var(--dark-mode-primary-clr);

    .color{
      filter: contrast(.8);
    }
    button{
      background-color: var(--dark-mode-primary-clr);
      color: #222;
    }
  }
`

export default AddNote
