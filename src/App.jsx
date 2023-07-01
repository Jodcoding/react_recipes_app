import { useState } from 'react'
// import {spinner} from './assets/spinner.svg'
import spinner from './assets/spinner.svg'
import RecipeCard from './Components/RecipeCard'
import { nanoid } from 'nanoid'
function App() {
  const [recipeValue, setRecipeValue] = useState("")
  const [inputValue, setInputValue] = useState("")

  const handleSearch = (e) =>{
    e.preventDefault()
    setRecipeValue(inputValue)
    console.log(inputValue)
    setInputValue("")
  }

  let messageContent = <div className="recipes-container"><div className="error">Nothing to show yet!</div></div>
  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="input-container">
          <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" placeholder="Type the recipe name" name="search-input" />
        </div>
        <button className="search-button">Search</button>
      </form>
       {recipeValue !== ''? <RecipeCard key={nanoid()} recipe={recipeValue}/> : messageContent}   
    </div>
  )
}

export default App
