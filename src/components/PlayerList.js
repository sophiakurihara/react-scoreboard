import React from 'react';
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = (props) => {
    return (
        <Consumer>
            { ({ players }) => (
                <React.Fragment>
                    {/* Players list */}
                    {players.map( (player,index) =>
                        <Player
                            key={player.id.toString()}
                            index={index}
                        />
                    )}
                </React.Fragment>
                )}
        </Consumer>
    );
}

export default PlayerList;