import React, { Component } from 'react';
import { Consumer } from "./Context";

const AddPlayerForm = () => {
    //controlled components call render on every keystroke (ie. live search) where a ref calls
    // render only once.
    const playerInput = React.createRef();

    // handleValueChange = (e) => {
    //     this.setState({value: e.target.value });
    // };

        return (
            <Consumer>
                { context => {
                    const handleSubmit = (e) => {
                        e.preventDefault();
                        context.actions.addPlayer(playerInput.current.value);
                        e.currentTarget.reset();
                        // this.props.addPlayer(this.state.value);
                        // this.setState({value: ''})
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
                }}
            </Consumer>
        );
}
 export default AddPlayerForm;
