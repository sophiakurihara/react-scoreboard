import React, { useContext } from 'react';
import { ScoreboardContext } from "./Context";
import PropTypes from 'prop-types';
import Counter from "./Counter";
import Icon from "./Icon";

//PureComponent does not re-render everything, only what has been changed
const Player = ({ index }) => {
    const { players, actions } = useContext(ScoreboardContext);
    const getHighScore = () => {
        const scores = players.map(p => p.score);
        const highScore = Math.max(...scores);
    //    checks for a score greater than 0
        if (highScore) {
            return highScore;
        }
        return null;
    };

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
                <Icon isHighScore={getHighScore() === players[index].score}/>
                {players[index].name}
            </span>
                <Counter index={index}/>
            </div>
        );
    }

Player.propTypes = {
    index: PropTypes.number
}

export default Player;