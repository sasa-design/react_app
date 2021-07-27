import {useState} from 'react';
import {Grid,FormControl,Select,InputLabel,makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
const GenerationButton = () => {
    const classes = useStyles();
    const [state, setState] = useState({generation: ""})
    
    const handleChange = (event) => {
        const generation = event.target.generation;
        setState({
            [generation]: event.target.value,
        });
    };
    return (
        <Grid container  justifyContent="center">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="generation-native-simple">世代を選べます</InputLabel>
                    <Select
                        native
                        value={state.generation}
                        onChange={handleChange}
                        inputProps={{
                            name: 'generation',
                            id: 'generation-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={"g_all"}>全てのポケモン</option>
                        <option value={"g1"}>第１世代</option>
                        <option value={"g2"}>第２世代</option>
                        <option value={"g3"}>第３世代</option>
                        <option value={"g4"}>第４世代</option>
                        <option value={"g5"}>第５世代</option>
                        <option value={"g6"}>第６世代</option>
                        <option value={"g7"}>第７世代</option>
                        <option value={"g8"}>第８世代</option>
                    </Select>
            </FormControl>
        </Grid>
    );
}

export default GenerationButton;
