import React from "react";
import Aux from '../../hoc/Auxilliary'
import classes from './Layout.module.css'

const layout = (props) =>{
    return(
        <Aux>
            <div>toolbar, side=drawer, backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;