import React, { useRef, useContext } from 'react';
import { ScoreboardContext } from "./Context";

const AddPlayerForm = () => {
    //controlled components call render on every keystroke (ie. live search) where a ref calls
    // render only once.
    const { actions } = useContext(ScoreboardContext);
    const playerInput = useRef();

    // handleValueChange = (e) => {
    //     this.setState({value: e.target.value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={playerInput}
                // value={this.state.value}
                // onChange={this.handleValueChange}
                placeholder="Enter a player's name"
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    );

}
 export default AddPlayerForm;
