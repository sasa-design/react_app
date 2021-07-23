import { useState,useEffect } from 'react';
import axios from 'axios';

const MonsterIndex = () => {
    const [monster,setMonster] = useState([]);
    useEffect(() => {
        const getMonster = async () => {
          const response = await axios.get('https://api.github.com/users/tagty');
          setMonster(response.data);
        }
        getMonster();
    }, []);

    return (
        <div>{monster.id}</div>
    );
}

export default MonsterIndex;