import {Grid} from '@material-ui/core';
import BackButton from '../components/Button/BackButton';
import MonsterDetail from '../components/MonsterShow/MonsterDetail';
import MonsterBase from '../components/MonsterShow/MonsterBase';
import MonsterSkill from '../components/MonsterShow/MonsterSkill';

const MonsterShow = () => {
    return (
        <Grid>
            <Grid>
                <BackButton />
            </Grid>
            <Grid>
                <MonsterDetail />
            </Grid>
            <Grid>
                <MonsterBase />
            </Grid>
            <Grid>
                <MonsterSkill />
            </Grid>
        </Grid>
    )

}



export default MonsterShow;
