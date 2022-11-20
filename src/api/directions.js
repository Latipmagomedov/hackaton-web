import api from "./api";

const regions = {
    getDirections(coordinates, query) {
        return api.get(`/directions/v5/mapbox/cycling/${coordinates.from.lon},${coordinates.from.lat};${coordinates.to.lon},${coordinates.to.lat}`, { params: query});
    },
    getGeocoding(address, query) {
        return api.get(`/geocoding/v5/mapbox.places/${address}.json`, { params: query});
    },
};

export default regions;
