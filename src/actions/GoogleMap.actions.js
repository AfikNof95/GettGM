/**
 * Created by Afik on 12/06/2017.
 */

import GoogleMapDispatcher from '../dispatchers/GoogleMap.dispatcher';
import GoogleMapApiUtil from '../utils/GoogleMap.api.util';

let GoogleMapActions = {
    getCurrentLocation: function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('action');
            this.getAddress(pos);
            GoogleMapDispatcher.dispatch({
                type: 'GET_CURRENT_LOCATION',
                pos
            })
        }.bind(this));

    },
    getAddress(position){
        GoogleMapApiUtil.getAddress(position.coords).then(function (response) {
            console.log(response);
            let formattedAddress=response.data.results[0].formatted_address;
            GoogleMapDispatcher.dispatch({
                type: 'GET_ADDRESS',
                address:formattedAddress
            })
        });

    }
};
export default GoogleMapActions;