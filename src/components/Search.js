import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router';
function Search() {

    const [search, setSearch]=useState('')
    const navigate=useNavigate()
    const handleSearch = (e)=>{
        if(e.key==='Enter' || e.type==='click'){
            navigate(`/search?query=${search}`)
        }
    }
  return (
    <div>
      
        <div class="input-group mb-3" className='searchbar'>
  <input className='inp' value={search} placeholder='search here' onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleSearch} type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" className='btn' type="button" id="button-addon2" onClick={handleSearch}>Search</button>
</div>
    </div>
  )
}

export default Search