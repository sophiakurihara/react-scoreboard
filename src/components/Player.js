import React from 'react';
import PropTypes from 'prop-types';
import Counter from "./Counter";
import Icon from "./Icon";

//PureComponent does not re-render everything, only what has been changed
const Player = ({ index }) => {

    return (
        <div className="player">
            <span className="player-name">
                {/*<button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>*/}

                {/*<Icon isHighScore={getHighScore() === players[index].score}/>*/}
                {/*{players[index].name}*/}
            </span>
                <Counter index={index}/>
            </div>
        );
    }

Player.propTypes = {
    index: PropTypes.number
}

export default Player;