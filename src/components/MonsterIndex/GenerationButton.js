import React from 'react'
import {Grid,FormControl,Select,InputLabel,makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
const GenerationButton = () => {
    const classes = useStyles();

    return (
        <Grid container  justifyContent="center">
            <FormControl className={classes.formControl}>
                <InputLabel>世代を選べます</InputLabel>
                    <Select
                        native
                        
                    >
                        <option aria-label="None" value="" />
                        <option value={0}>全てのポケモン</option>
                        <option value={1}>第１世代</option>
                        <option value={2}>第２世代</option>
                        <option value={3}>第３世代</option>
                        <option value={4}>第４世代</option>
                        <option value={5}>第５世代</option>
                        <option value={6}>第６世代</option>
                        <option value={7}>第７世代</option>
                        <option value={8}>第８世代</option>
                    </Select>
            </FormControl>
        </Grid>
    );
}

export default GenerationButton;
