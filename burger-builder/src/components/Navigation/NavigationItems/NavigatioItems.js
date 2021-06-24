import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Build</NavigationItem>
        <NavigationItem link='/'> Check Out</NavigationItem>
    </ul>
);

export default navigationItems;