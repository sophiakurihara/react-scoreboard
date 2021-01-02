import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ title }) => {
    return (
        <header>
            <Stats />
            <h1>{ title }</h1>
            <Stopwatch />
        </header>
    );
};

// Header.propTypes = {
//     title: PropTypes.string,
//     players: PropTypes.arrayOf(PropTypes.object)
// }
//
// Header.defaultProps = {
//     title: 'Scoreboard'
// }

export default Header;