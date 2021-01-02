import React, { useContext } from 'react';
import { ScoreboardContext } from "./Context";

const Stats = () => {
    const { players } = useContext(ScoreboardContext);
    const totalPlayers = players.length;
    const totalPoints = players.reduce( (total, player) => {
      return total + player.score;
    }, 0);

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
            </tr>
            </tbody>
        </table>
    );
};

//for performance reasons, propTypes is only checked in development
// Stats.propTypes = {
//     players: PropTypes.arrayOf(PropTypes.shape({
//         score: PropTypes.number
//     }))
// };

export default Stats;