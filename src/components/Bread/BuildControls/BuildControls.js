import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const control = [
    {Label:'Salad', type: 'salad'},
    {Label:'Cheese', type: 'cheese'},
    {Label:'Bacon', type: 'bacon'},
    {Label:'Meat', type: 'meat'}
]
// const BuildControls = (props) => {
//   return (
//     <div className={classes.BuildControls}>
//         {control.map(ctrl =>{
//            return <BuildControl 
//            key={ctrl.Label} 
//            Label={ctrl.Label}
//            added= {()=>props.ingredientsAdded(ctrl.type)}
//            deleted= {()=>props.ingredientsDeleted(ctrl.type)}
//            />
//         })}
//     </div>
//   )
// }

const BuildControls = (props)=>{
  return(
    <div className={classes.BuildControls}>
      <h2>TOTAL PRICE: {props.price}</h2>
      {control.map(c =>{
        return <BuildControl
        key={c.Label}
        Label={c.Label}
        disabled={props.disabled[c.type]}
        added= {()=>props.ingredientsAdded(c.type)}
        deleted= {()=>props.ingredientsDeleted(c.type)}
       />
      })}
    </div>
  )
}

export default BuildControls