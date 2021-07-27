import { combineReducers } from 'redux';
import MonsterIndexReducer from './MonsterIndex';
import MonsterShowReducer from './MonsterShow';

const someReducer = combineReducers({
    monsterindex: MonsterIndexReducer,
    monstershow: MonsterShowReducer
});

export default someReducer;