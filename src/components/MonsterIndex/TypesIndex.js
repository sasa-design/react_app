import React from 'react';
import {Types} from '../../utils/types/Types'
import { Grid,Avatar,makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    white: {
        backgroundColor: '#fafafa',
        color: 'black'
    },
    orange: {
        backgroundColor: 'orange'
    },
    lightblue: {
        backgroundColor: '#bbdefb'
    },
    purple: {
        backgroundColor: 'purple'
    },
    deeporange: {
        backgroundColor: '#bf360c'
    },
    brown: {
        backgroundColor: 'brown'
    },
    lime: {
        backgroundColor: 'lime'
    },
    deeppurple: {
        backgroundColor: 'deepPurple'
    },
    grey: {
        backgroundColor: 'grey'
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    green: {
        backgroundColor: 'green'
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    pink: {
        backgroundColor: 'pink'
    },
    whiteblue: {
        backgroundColor: '#64b5f6'
    },
    indigo: {
        backgroundColor: 'indigo'
    },
    black: {
        backgroundColor: 'black'
    },
    whitepink: {
        backgroundColor: '#ff4081'
    }
});

const TypesIndex = () => {
    const classes = useStyles();
    
    return (
        <Grid 
            container 
            direction="row" 
            justifyContent="center" 
            alignItems="center"
        >
            <Avatar className={classes.white}>{Types[0].short}</Avatar>
            <Avatar className={classes.orange}>{Types[1].short}</Avatar>
            <Avatar className={classes.lightblue}>{Types[2].short}</Avatar>
            <Avatar className={classes.purple}>{Types[3].short}</Avatar>
            <Avatar className={classes.deeporange}>{Types[4].short}</Avatar>
            <Avatar className={classes.brown}>{Types[5].short}</Avatar>
            <Avatar className={classes.lime}>{Types[6].short}</Avatar>
            <Avatar className={classes.deeppurple}>{Types[7].short}</Avatar>
            <Avatar className={classes.grey}>{Types[8].short}</Avatar>
            <Avatar className={classes.red }>{Types[9].short}</Avatar>
            <Avatar className={classes.blue}>{Types[10].short}</Avatar>
            <Avatar className={classes.green}>{Types[11].short}</Avatar>
            <Avatar className={classes.yellow}>{Types[12].short}</Avatar>
            <Avatar className={classes.pink}>{Types[13].short}</Avatar>
            <Avatar className={classes.whiteblue}>{Types[14].short}</Avatar>
            <Avatar className={classes.indigo}>{Types[15].short}</Avatar>
            <Avatar className={classes.black}>{Types[16].short}</Avatar>
            <Avatar className={classes.whitepink}>{Types[17].short}</Avatar>
        </Grid>
        
    );
}
export default TypesIndex;
