"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manager = exports.deleteTrip = exports.updateTrip = exports.createTrip = exports.getTripById = exports.getAllTrips = void 0;
const uuid_1 = require("uuid");
const jsonfile = require("jsonfile");
const tripsDal_1 = require("../DB/tripsDal");
const tripsDal_2 = require("../DB/tripsDal");
const tripsDal_3 = require("../DB/tripsDal");
const trips = (0, tripsDal_1.read)();
function getAllTrips() {
    return trips.map(trip => ({ id: trip.id, name: trip.name, destination: trip.destination, startDate: trip.startDate, endDate: trip.endDate, image: trip.image }));
}
exports.getAllTrips = getAllTrips;
// Get a trip by ID
function getTripById(id) {
    return trips.find((trip) => trip.id === id);
}
exports.getTripById = getTripById;
// Create a new trip
function createTrip(newTrip) {
    newTrip.id = (0, uuid_1.v4)();
    trips.push(newTrip);
    (0, tripsDal_2.write)(trips);
    return newTrip;
}
exports.createTrip = createTrip;
// Update a trip
function updateTrip(updatedTrip) {
    const index = trips.findIndex((trip) => trip.id === updatedTrip.id);
    if (index === -1) {
        return undefined; // Trip not found
    }
    trips[index] = updatedTrip;
    (0, tripsDal_2.write)(trips);
    return updatedTrip;
}
exports.updateTrip = updateTrip;
// Delete a trip
function deleteTrip(id) {
    const index = trips.findIndex((trip) => trip.id === id);
    if (index === -1) {
        return undefined; // Trip not found
    }
    (0, tripsDal_2.write)(trips);
    return trips.splice(index, 1)[0];
}
exports.deleteTrip = deleteTrip;
const manager = () => {
    console.log("utilss");
    (0, tripsDal_3.updateData)();
};
exports.manager = manager;
