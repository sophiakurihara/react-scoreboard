import React from 'react';
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";
import PlayerList from "./PlayerList";


export default () => {
    return (
            <div className="scoreboard">
                <Header title="Scoreboard"/>

                <PlayerList/>

                <AddPlayerForm />
            </div>
    );
}
