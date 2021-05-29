import React, { useState } from 'react'
import { MdSave } from 'react-icons/md'
const AddNote = ({ addNote }) => {
  const [noteContent, setNoteContent] = useState('')
  // character numbers
  const charLetters = 250
  const handleChange = (e) => {
    const myLength = e.target.value.length
    if (charLetters - myLength >= 0) {
      setNoteContent(e.target.value)
    }
  }
  const handleSaveNote = () => {
    if (noteContent.trim().length > 0) {
      addNote(noteContent)
      setNoteContent('')
    }
  }
  return (
    <div className='note new-note'>
      <textarea
        cols='10'
        rows='8'
        value={noteContent}
        onChange={handleChange}
        placeholder='write your note ...'
      ></textarea>
      <div className='note-footer'>
        <small>{charLetters - noteContent.length} remaining</small>
        <button className='save'>
          <MdSave className='icon' onClick={handleSaveNote} size='1.3rem' />
        </button>
      </div>
    </div>
  )
}

export default AddNote
