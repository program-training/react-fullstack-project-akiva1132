import { Trip } from "../models/trip";
import { v4 as uuidv4 } from 'uuid';
const jsonfile = require("jsonfile");
import { read } from "../DB/tripsDal"
import { write } from "../DB/tripsDal"
import {updateData} from "../DB/tripsDal"
import { updateSourceFile } from "typescript";

const trips: Trip[] =  read()


export function getAllTrips(): Partial<Trip>[] {
  return trips.map(trip => ({id: trip.id, name: trip.name,destination: trip.destination,startDate: trip.startDate,endDate:trip.endDate,image:trip.image}));
}

// Get a trip by ID
export function getTripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}

// Create a new trip
export function createTrip(newTrip: Trip): Trip {
  newTrip.id = uuidv4();
  trips.push(newTrip);
  write(trips)
  return newTrip;
}

// Update a trip
export function updateTrip(updatedTrip: Trip): Trip | undefined {
  const index = trips.findIndex((trip) => trip.id === updatedTrip.id);
  if (index === -1) {
    return undefined; // Trip not found
  }
  trips[index] = updatedTrip;
  write(trips)
  return updatedTrip;
}

// Delete a trip
export function deleteTrip(id: string): Trip | undefined {
  const index = trips.findIndex((trip) => trip.id === id);
  if (index === -1) {
    return undefined; // Trip not found
  }
  write(trips)
  return trips.splice(index, 1)[0];
}

export const manager = () =>{
  console.log("utilss");
      updateData()
}
