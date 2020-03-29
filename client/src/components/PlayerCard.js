import React from 'react';

function PlayerCard(props) {

    return (
        <>
            {/* {console.log('bk: PlayerCard.js: PlayerCard: props: ', props.players)} */}

            <div>
                <h2>{props.players.name}</h2>
                <div>
                    <ul>
                        <li>Country: {props.players.country}</li>
                        <li>Searches: {props.players.searches}</li>
                    </ul>
                    
                </div>
            </div>

        </>
    )
}

export default PlayerCard;

