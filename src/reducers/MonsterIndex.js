import { MONSTER_DATA_SUCCESS } from '../actions/MonsterIndex/action';
import { Generate1 } from '../utils/monsterData/Generate1'
const initialState = {
    data: {
        monsters: Generate1,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MONSTER_DATA_SUCCESS:
            return { 
                ...state,
                data: {
                    monsters: action.payload
                } 
            };
        default: return state;
    }
}