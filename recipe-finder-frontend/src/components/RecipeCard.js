import React from 'react'
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const RecipeCard = (props) => {
    return (
        <div className='recipe-card'>
            <a target="_blank" rel="noreferrer" href={props.recipe.sourceUrl}>
                <h3>{props.recipe.title}</h3>
                <img src={props.recipe.image} alt=''/>
            </a>
            <IconButton aria-label="Favorite" onClick={() => props.handleFavoriteClick(props.recipe)}>
                <FavoriteIcon />
            </IconButton>
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