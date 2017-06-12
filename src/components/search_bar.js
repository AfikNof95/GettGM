/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input value={this.props.inputValue} onChange={this.props.onInputChange}/>
        )
    }

    componentDidMount() {
    }
}
export default SearchBar;