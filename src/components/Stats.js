import React from 'react';
import { Consumer } from "./Context";

const Stats = () => {

  return (
      <Consumer>
          { context => {
              const totalPlayers = context.players.length;
              const totalPoints = context.players.reduce((total,player) => {
                  return total + player.score;
              },0);

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
          }}
      </Consumer>
  );
};

//for performance reasons, propTypes is only checked in development
// Stats.propTypes = {
//     players: PropTypes.arrayOf(PropTypes.shape({
//         score: PropTypes.number
//     }))
// };

export default Stats;