/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';
import NearbyPlaceListItem from './nearby_places_list_item';
class NearbyPlacesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.nearbyPlaces) {
            const nearByPlaces = this.props.nearbyPlaces.map(function (item) {
                return <NearbyPlaceListItem name={item.name} key={item.id}></NearbyPlaceListItem>
            });
            return (
                <div className="nearby-places-container">
                    <h4>Nearby Places</h4>
                    <ul className="nearby-places">
                        {nearByPlaces}
                    </ul>
                </div>
            )
        }
        else
            return null;
    }

}

export default NearbyPlacesList;