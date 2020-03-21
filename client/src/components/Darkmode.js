import React from 'react';
import useDarkmode from '../hooks/useDarkmode';
import PlayerCard from './PlayerCard';

    function Darkmode({ player }) {

        const [ theme, switchTheme ] = useDarkmode();

        return (
            <>
                <div 
                
                style={{
                    background: theme === 'dark' ? '#00021c' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#00021c',
                  }}

                >
                    <h1>Womens Soccer Players</h1>
                    <button type='button' onClick={switchTheme}> Toggle Dark Mode </button>
                    <section>
                        {player.map(players => (
                            <PlayerCard players={players}/>
                        ))}
                    </section>
                </div>
            </>
        )
    }

export default Darkmode;

