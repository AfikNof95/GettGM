/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';

class NearbyPlacesListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.key}><span className="nearby-places-item">{this.props.name}</span></li>
        )
    }

}

export default NearbyPlacesListItem;