import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({ notes, addNote,removeNote }) => {
  return (
    <div className='notes'>
      {notes.map((note) => {
        return <Note key={note.id} {...note} removeNote={removeNote} />
      })}
      <AddNote addNote={addNote} />
    </div>
  )
}

export default NoteList
