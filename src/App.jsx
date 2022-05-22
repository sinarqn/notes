import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import styled from 'styled-components'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const savedNotes = localStorage.getItem("notes");

  useEffect(() => {
    if (savedNotes !== null) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addNote = (text, color) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      color: color,
      date: `${date.getDate()} ${months[date.getMonth()]}`,
    };

    setNotes([...notes, newNote]);
  };

  const deletingNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Body className={darkMode ? 'dark' : null}>
      <div className="container">
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />

        <Search darkMode={darkMode} handleSearch={setSearchNote} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
          darkMode={darkMode}
        />
      </div>

    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  --dark-mode-primary-clr: #48974e;

  &.dark{
    background-color: #121212;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 960px;
  }
`

export default App;
