import React , {useEffect, useState } from 'react';

import ListPlayers from './playerslist';
import EditPlayer from './editplayer'

const Home = (props) => {
    const [flag, setFlag] = useState('list');
    const [player, setPlayer] = useState('');
        
        switch (flag) {
            case 'edit': {
            return (
                <span>
                    {alert(player)}
                    <EditPlayer customer={player}/>
                </span>
        )}
        default: {
            return (
                <span>
                    <ListPlayers customer={props.players} setFlag={setFlag} player={setPlayer} />
                </span>
        )}
    }
}
    

export default Home;