import React from 'react';

const Stats = () => {
    // const totalPlayers = players.length;
    // const totalPoints = players.reduce( (total, player) => {
    //   return total + player.score;
    // }, 0);

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>0</td>
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