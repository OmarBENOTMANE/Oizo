import axios from "axios";

const TRIP_API_BASE_URL = "http://localhost:8080/api/v1/trips";

class TripService {
  getTrips() {
    return axios.get(TRIP_API_BASE_URL);
  }

  createTrip(trip) {
    return axios.post(TRIP_API_BASE_URL, trip);
  }

  getTripById(tripId) {
    return axios.get(TRIP_API_BASE_URL + "/" + tripId);
  }

  updateTrip(trip, tripId) {
    return axios.put(TRIP_API_BASE_URL + "/" + tripId, trip);
  }

  deleteTrip(tripId) {
    return axios.delete(TRIP_API_BASE_URL + "/" + tripId);
  }
}

export default new TripService();