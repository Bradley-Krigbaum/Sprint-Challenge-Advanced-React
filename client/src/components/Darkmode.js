import React from 'react';

import useDarkmode from '../hooks/useDarkmode';
import PlayerCard from './PlayerCard';

    function Darkmode({ player }) {

        const [ theme, switchTheme ] = useDarkmode();

        return (
            <div style= {{
                    background: theme === 'dark' ? '#00021c' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#00021c'
            }}>
                <h1>2019 Women’s World Cup Player Searches</h1>
                <button type='button' onClick={switchTheme}> Toggle Dark Mode </button>
                <section data-testid='playerSection' >
                    {player.map(players => (
                        <PlayerCard players={players} key={players.id}/>
                    ))}
                </section>
            </div>
        )
    }

export default Darkmode;
