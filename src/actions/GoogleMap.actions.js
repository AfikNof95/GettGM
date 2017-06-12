/**
 * Created by Afik on 12/06/2017.
 */

import GoogleMapDispatcher from '../dispatchers/GoogleMap.dispatcher';
import GoogleMapApiUtil from '../utils/GoogleMap.api.util';

//getCurrentLocation can include getAddress inside and save one state change.

let GoogleMapActions = {
    getCurrentLocation: function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            this.getAddress(pos);
            this.getNearbyPlaces(pos);
            GoogleMapDispatcher.dispatch({
                type: 'GET_CURRENT_LOCATION',
                pos
            })
        }.bind(this));

    },
    getAddress(position){
        GoogleMapApiUtil.getAddress(position.coords).then(function (response) {
            let formattedAddress = response.data.results[0].formatted_address;
            GoogleMapDispatcher.dispatch({
                type: 'GET_ADDRESS',
                address: formattedAddress
            })
        });

    },
    getNearbyPlaces(position){
        GoogleMapApiUtil.getNearbyPlaces(position.coords).then(function (response) {
            const nearByPlaces = response.data.results;
            
            GoogleMapDispatcher.dispatch({
                type: 'GET_NEARBY_PLACES',
                nearByPlaces
            })
        })
    }

};
export default GoogleMapActions;