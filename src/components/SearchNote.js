import React from 'react'
import { MdSearch } from 'react-icons/md'
const SearchNote = ({ setSearchText }) => {
  const handleSearch = (e)=>{
    setSearchText(e.target.value)

  }
  return (
    <div className='search'>
      <input type='text' placeholder='find your note' onChange={handleSearch} />
      <MdSearch className='icon' size='1.3rem' />
    </div>
  )
}

export default SearchNote
