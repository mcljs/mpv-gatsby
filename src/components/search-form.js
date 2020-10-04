import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import { MainContent } from './styles/base'
import './search.css'
import { FaSearch} from 'react-icons/fa'
const SearchForm = ({ initialQuery = "" }) => {
  // Create a piece of state, and initialize it to initialQuery
  // query will hold the current value of the state,
  // and setQuery will let us change it
  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)
  // On input change use the current value of the input field (e.target.value)
  // to update the state's query value
  const handleChange = e => {
    setQuery(e.target.value)
  }

  // When the form is submitted navigate to /search
  // with a query q paramenter equal to the state's query value
  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/search?q=${q}`)
  }
  return (
    
    <form className="search" role="search" onSubmit={handleSubmit}>
     <MainContent>
     <div className="demo">
      <label htmlFor="search-input" style={{ display: "block" }}>

      </label>
      <input
      
        ref={inputEl}
        id="Buscador"
        className="search-input"
        type="search"
        value={query}
        placeholder="Buscar"
        onChange={handleChange}
      />
      <button className="button" type="submit"><FaSearch/></button>
      </div>
      </MainContent>
    </form>
    
  )
}
export default SearchForm