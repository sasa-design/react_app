
import TypesIndex from '../components/MonsterIndex/TypesIndex';
import GenerationButton from '../components/MonsterIndex/GenerationButton';
import MonsterCard from '../components/MonsterIndex/MonsterCard';
import {Grid} from '@material-ui/core';


const MonsterIndex = () => {
    return (
        <Grid>
            <TypesIndex />
            <GenerationButton />
            <MonsterCard />
        </Grid>
    );
}

export default MonsterIndex;