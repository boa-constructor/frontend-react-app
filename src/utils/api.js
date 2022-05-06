import axios from "axios";

//here is the base URL for your emulators
//add cloud function endpoint to start writing your utility functions
const firestoreTestApi = axios.create({
  baseURL: "http://127.0.0.1:5001/dndinder-68dcc/us-central1",
});
