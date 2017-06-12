/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';

class LocationData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.location &&this.props.address)
        return (
            <div className="location-data">
                <span>Your Location : {this.props.location.coords.latitude}, {this.props.location.coords.longitude} - {this.props.address}</span>
            </div>
        );
        else return null;
    }

}

export default LocationData;