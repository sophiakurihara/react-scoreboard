import React, { useContext } from 'react';
import { ScoreboardContext } from "./Context";
import Player from "./Player";

const PlayerList = (props) => {
    const { players } = useContext(ScoreboardContext);
    return (
        <>
            {/* Players list */}
            {players.map( (player,index) =>
                <Player
                    key={player.id}
                    index={index}
                />
            )}
        </>
    );
}

export default PlayerList;