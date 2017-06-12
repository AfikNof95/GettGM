/**
 * Created by Afik on 12/06/2017.
 */
import GoogleMapDispatcher from '../dispatchers/GoogleMap.dispatcher';
import EventEmitter from 'events';


class GoogleMapStore extends EventEmitter {
    constructor() {
        super();
        this.currentState = {inputValue: '', nearbyPlaces: '', currentLocation: '', address: ''};
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    handleAction(action) {
        switch (action.type) {
            case 'GET_CURRENT_LOCATION':
                console.log('hi');
                this.currentState.currentLocation = action.pos;
                this.emitChange();
                break;
            case 'GET_ADDRESS':
                this.currentState.address = action.address;
                this.emitChange();
                break;
            case 'GET_NEARBY_PLACES':
                this.currentState.nearbyPlaces = action.nearByPlaces;
                this.emitChange();
        }
    }

    getState() {
        return this.currentState;
    }

}
const GMStore = new GoogleMapStore();
GoogleMapDispatcher.register(GMStore.handleAction.bind(GMStore));
export default GMStore;