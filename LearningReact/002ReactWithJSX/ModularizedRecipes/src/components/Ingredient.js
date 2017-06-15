/*jshint esversion: 6 */

const Ingredient = ({amount, measurement, name}) =>
    <li>
        <span className='amount'>{amount}</span>
        <span className='measurement'>{measurement}</span>
        <span className='name'>{name}</span>
    </li>

export default Ingredient;