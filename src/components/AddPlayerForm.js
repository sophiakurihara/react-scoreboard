import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state={
        value: ''
    };

    //controlled components call render on every keystroke (ie. live search) where a ref calls
    // render only once.
    playerInput = React.createRef();

    // handleValueChange = (e) => {
    //     this.setState({value: e.target.value });
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlater(this.playerInput.current.value);
        e.currentTarget.reset();
        // this.props.addPlayer(this.state.value);
        // this.setState({value: ''})
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
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
}
 export default AddPlayerForm;
