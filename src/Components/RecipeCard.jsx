import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Description from './Description.jsx'

function RecipeCard(props) {

    const APP_ID = 'a07bfde8'
    const APP_KEY = '74753a35d4b11a3629831ab336e70a31'

    const [recipeAPI, setRecipeAPI] = useState({
        loading: false,
        error: false,
        data: undefined
    })

    useEffect(() => {
        if(props.recipe == '') return 
        setRecipeAPI({ ...recipeAPI, loading: true })
        const url = `https://api.edamam.com/search?q=${props.recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&to=40`
    
        fetch(url)
        .then(res => {
            if(!res.ok)
                throw new Error('An error occurred!')
            return res.json()
        })
        .then(recipes =>{
            console.log(recipes)
            setRecipeAPI({loading: false, error: false, data: recipes.hits})
        } )
        .catch(() =>{
            setRecipeAPI({loading: false, error: true, data: undefined})
        })

    }, [props.recipe])

    let content;
    // if(props.recipe == '') content = <div className="error">Nothing to show yet!</div>
    if (recipeAPI.loading) content = <div className="spinner"></div>
    else if (recipeAPI.error) content = <div className="error">An error occurred!</div>
    else if (recipeAPI.data?.length > 0) content = recipeAPI.data.map(item => (
        <div className=" item" key={nanoid()}>
            <div className="item-img"><img src={item.recipe.image} alt="" /></div>
            <Description
             key={nanoid()}
             label={item.recipe.label}
             ingredients={item.recipe.ingredients}
             />
        </div>
    ))
    else if (recipeAPI.data?.length === 0) content = <div className="error">No result found!</div>
    return (
        <div className="recipes-container"> {content}</div>
    )
}

export default RecipeCard
