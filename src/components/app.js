/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';
import GoogleMap from './google_map';

import GMStore from '../stores/GoogleMap.store';
import GoogleMapActions from '../actions/GoogleMap.actions.js';
import NearbyPlacesList from './nearby_places_list';
import LocationData from './location_data';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = GMStore.getState();
    }

    render() {
        return (
            <div className="map-container">
                <LocationData location={this.state.currentLocation} address={this.state.address}/>
                <GoogleMap
                    address={this.state.address}
                    location={this.state.currentLocation}
                    nearbyPlaces={this.state.nearbyPlaces}
                />
                <NearbyPlacesList nearbyPlaces={this.state.nearbyPlaces}/>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({inputValue: event.target.value});
    }


    componentWillMount() {
        GMStore.addChangeListener(this.onChange.bind(this));
        GoogleMapActions.getCurrentLocation();

    }

    componentWillUnmount() {
        GMStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(GMStore.getState());
    }
}

export default App;