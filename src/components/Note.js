import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
const Note = ({ id, content, date, removeNote  }) => {
  return (
    <div className='note'>
      <span>{content}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='icon' onClick={()=>removeNote(id)} size='1.3rem' />
      </div>
    </div>
  )
}

export default Note
