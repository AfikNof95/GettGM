/**
 * Created by Afik on 12/06/2017.
 */

import React, {Component} from 'react';
const DEFAULT_LOCATION = {coords: {latitude: 4, loongitude: 4}};

class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref="map" className="google-map"></div>
        )
    }


    componentDidUpdate() {
        console.log('Updated', this.props);
        if (!this.props.location)
            this.generateGoogleMap(DEFAULT_LOCATION);
        else {
            this.generateGoogleMap(this.props.location,true);
        }
    }


    generateGoogleMap(pos, geolocationActivated = false) {
        const map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }
        });
        if (geolocationActivated) {
            var message=this.props.address;
            const infoWindow = new google.maps.InfoWindow({map: map});
            infoWindow.setPosition(map.center);
            infoWindow.setContent(message||'You are here!');
            map.setCenter(map.center);
        }
    }

}
export default GoogleMap;