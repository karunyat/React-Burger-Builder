import React from 'react';
import classes from './BuildControls.css';
import BuilControl from './BuildControl/BuildControl';
const controls=[
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
];
const buildControls=(props)=>(
<div className={classes.BuildControls}>
    <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
{controls.map(ctrl=>(
    <BuilControl 
    key={ctrl.label} 
    label={ctrl.label} 
    
    added={()=>props.ingredientAdded(ctrl.type)}
    deducted={()=>props.ingredientDeducted(ctrl.type)}
    disabled={props.disabled[ctrl.type]}/>
))}
<button 
className={classes.OrderButton}
disabled={!props.purchasable}
onClick={props.ordered}
>ORDER NOW</button>
</div>
);
export default buildControls;

