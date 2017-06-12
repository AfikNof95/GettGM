/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';
import GoogleMap from './google_map';
import SearchBar from './search_bar';
const API_KEY = 'AIzaSyD9F3-xzEKrc10lhn0tOQS3ocmhy8UkfxQ';
const ROOT_URL_GOOGLEMAPS = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}`;


import GMStore from '../stores/GoogleMap.store';
import GoogleMapActions from '../actions/GoogleMap.actions.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = GMStore.getState();
    }

    render() {
        return (
            <div>
                <SearchBar inputValue={this.state.inputValue} onInputChange={(e)=>this.onInputChange(e)}/>
                <GoogleMap
                    address={this.state.address}
                    location={this.state.currentLocation}/>
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
        console.log('change');
        this.setState(GMStore.getState());
        console.log(this.state);
    }
}

export default App;