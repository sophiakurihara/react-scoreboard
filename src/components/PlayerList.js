import React from 'react';
import Player from "./Player";

const PlayerList = (props) => {
    return (
        <>
            {/* Players list */}
            <Player
                key={1}
                index={0}
            />
        </>
    );
}

export default PlayerList;