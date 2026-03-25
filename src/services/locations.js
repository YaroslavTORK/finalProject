import { Location } from '../models/location.js';

export const getAllLocations = async () => {
  const locations = await Location.find();
  return locations;
};