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
        if (!this.props.address)
            return <div>Loading!!!</div>
        return (
            <div ref="map" className="google-map"></div>
        )
    }


    componentDidUpdate() {
        if (this.props.address)
            if (!this.props.location)
                this.generateGoogleMap(DEFAULT_LOCATION);
            else {
                this.generateGoogleMap(this.props.location, true);
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
            var message = this.props.address;
            const infoWindow = new google.maps.InfoWindow({map: map});
            infoWindow.setPosition(map.center);
            infoWindow.setContent(message || 'You are here!');
            map.setCenter(map.center);
        }
        if (this.props.nearbyPlaces) {
            this.props.nearbyPlaces.forEach(function (currentValue,index,arr) {
                new google.maps.Marker({
                    position: currentValue.geometry.location,
                    map: map,
                    title: currentValue.name
                });
            });
        }
    }

}
export default GoogleMap;