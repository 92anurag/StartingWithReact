/*jshint esversion: 6 */

import Ingredient from './Ingredient';

const IngredientsList = ({list}) =>
    <ul className='ingredients'>
        {list.map((ingredient, index) =>
            <Ingredient key = {index} {...ingredient} />
        )}
    </ul>

export default IngredientsList;