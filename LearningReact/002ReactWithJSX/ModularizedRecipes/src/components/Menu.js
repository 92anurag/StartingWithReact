/*jshint esversion: 6 */

import Recipe from './Recipe';

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious Receipes</h1>
        </header>
        <div className = 'recipes'>
        {recipes.map((recipe, index) =>
            <Recipe key = {index} {...recipe} />
        )}
        </div>
    </article>


export default Menu;