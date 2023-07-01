import { useState } from 'react'
import {nanoid} from 'nanoid'
function Description(props) {

    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () =>{
        if(document.querySelector('#open'))
            alert('Please, close the open modal first!')
        else
            setShowMore(true)
        console.log('handleShowMore')
    }

    const getIngredients= (ingredients)=>{
        let itemIngredients = ingredients.map(ingredient => ([
            <p key={nanoid()}>{ingredient.text}</p>
        ]))
         return itemIngredients
     }
    return (
        <div className="item-description">
            <p className="text">{props.label}</p>
            <button onClick={() => handleShowMore() } className="recipe-link">See +</button>
            <div className="modal" id={showMore ? 'open' : 'close'}>
                {getIngredients(props.ingredients)}
                <div className="modal-header">
                <button onClick={() => setShowMore(false)} className="close-modal">X</button>
                </div>
            </div>
        </div>
    )
}

export default Description
