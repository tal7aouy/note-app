import React, { useEffect, useState } from 'react'
import NoteList from './components/NoteList'
import Search from './components/SearchNote'
import { nanoid } from 'nanoid'
import Theme from './components/Theme'
import axios from 'axios'
// componnent
const App = () => {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:3000/notes')
    const data = await response.data
    setNotes(data)
  }
  // useEffect
  useEffect(() => {
    fetchNotes()
  }, [])
  // add note
  const addNote = (text) => {
    const NewNote = {
      id: nanoid(),
      content: text,
      date: new Date().toLocaleDateString(),
    }
   axios.post('http://localhost:3000/notes',NewNote).then(resp=>{
     console.log("success");
     fetchNotes()
   }).catch(err=>console.log(err))
  }
  // remove Note
  const removeNote = (id) => {
    // const newNotes = notes.filter((note) => note.id !== id)
     axios
       .delete(`http://localhost:3000/notes/${id}`)
       .then((resp) => {
         console.log("note removed")
         fetchNotes()
       })
       .catch((err) => console.log(err))
  }
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className='container'>
        <div className='header'>
          <h2>
            <span>Note</span> App
          </h2>
          <Search setSearchText={setSearchText} />
          <Theme setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
        <NoteList
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(searchText.toLowerCase())
          )}
          addNote={addNote}
          removeNote={removeNote}
        />
      </div>
    </div>
  )
}

export default App
