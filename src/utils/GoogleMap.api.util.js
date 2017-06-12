/**
 * Created by Afik on 12/06/2017.
 */

const DEFAULT_LOCATION = {coords: {latitude: 4, loongitude: 4}};
const API_KEY_REVERSEGEO = 'AIzaSyD9F3-xzEKrc10lhn0tOQS3ocmhy8UkfxQ';
const API_KEY_PLACES = 'AIzaSyDhPgHTHDBL5Y40wyTQEVrVMwKvV37GHB4';
const ROOT_URL_REVERSEGEO = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY_REVERSEGEO}`;
const ROOT_URL_PLACES = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=500&key=${API_KEY_PLACES}`;
const API_REVERSEGEO=`http://localhost:3000/api/getlocation?coords=`;
const API_PLACES=`http://localhost:3000/api/getnearbyplaces?coords=`;
import axios from 'axios';

const GoogleMapApiUtil = {
    getLocation: function () {
        //return navigator.geolocation.getCurrentPosition();
    },
    getAddress: function (coords) {
        const latlng = `${coords.latitude},${coords.longitude}`;
        return axios.get(`${API_REVERSEGEO}${latlng}`);
        // return axios.get(`${ROOT_URL_REVERSEGEO}&latlng=${latlng}`);
    },
    getNearbyPlaces: function (coords) {
        console.log('nearby',coords);
        const latlng = `${coords.latitude},${coords.longitude}`;
        return axios.get(`${API_PLACES}${latlng}`);
    }
};
module.exports = GoogleMapApiUtil;