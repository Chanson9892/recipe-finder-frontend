import React from 'react'
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const RecipeCard = (props) => {
    return (
        <div className='recipe-card'>
            <a target="_blank" rel="noreferrer" href={props.recipe.sourceUrl}>
                <h3>{props.recipe.title}</h3>
                <img src={props.recipe.image} alt=''/>
            </a>
            <button onClick={() => props.handleFavoriteClick(props.recipe)}>Favorite</button>
            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />}>
                    Missing Ingredients
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='recipe-ingredients'>
                        {props.recipe.missedIngredients.map((ingredient) => (
                        <li key={ingredient.original}>{ingredient.name}</li>
                    ))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
        )
}

export default RecipeCard;