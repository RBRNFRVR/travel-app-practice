import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles'

const List = ()=> {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Typography variant="h4"> Restaurants, Hotels, and Attractions near you</Typography>
            <FormControl className={classes.formControl}>

            </FormControl>
        </div>
    );
}

export default List;