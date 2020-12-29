import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from "./Counter";
import Icon from "./Icon";

//PureComponent does not re-render everything, only what has been changed
class Player extends PureComponent{

    static propTypes = {
        index: PropTypes.number
    };

    render() {
        const {
            index
        } = this.props;

        return (
            <div className="player">
                <Consumer>
                    { ({ actions,players }) => {
                       const getHighScore = () => {
                            const scores = players.map(p => p.score);
                            const highScore = Math.max(...scores);
                            //checks for a score greater than 0
                            if (highScore) {
                                return highScore;
                            }
                            return null;
                        };

                        return (
                            <span className="player-name">
                            <button className="remove-player"
                                onClick={() => actions.removePlayer(players[index].id)}>✖</button>

                             <Icon isHighScore={getHighScore() === players[index].score}/>
                                {players[index].name}
                            </span>
                        );
                    }}
                </Consumer>

                <Counter
                    index={index}
                />
            </div>
        );
    }
}

export default Player;