/**
 * Created by Afik on 12/06/2017.
 */

const DEFAULT_LOCATION = {coords: {latitude: 4, loongitude: 4}};
const API_KEY = 'AIzaSyD9F3-xzEKrc10lhn0tOQS3ocmhy8UkfxQ';
const ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}`;
import axios from 'axios';

const GoogleMapApiUtil = {
    getLocation: function () {
        //return navigator.geolocation.getCurrentPosition();
    },
    getAddress: function (coords) {
        const latlng = `${coords.latitude},${coords.longitude}`;
        return axios.get(`${ROOT_URL}&latlng=${latlng}`);
    }
};
module.exports = GoogleMapApiUtil;