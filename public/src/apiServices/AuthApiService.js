import axios from "axios";

class AuthApiService {
  PostApiCall(url, data) {
    return axios.post(url, data);
  }

  PostApi(url, data) {
    return axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  PostApiFormData(url, data, token) {
    return axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  }

  PutApiFormData(url, data, token) {
    return axios.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  }

  PostApiCallWithUrl(url, data, token) {
    //console.log("api data", url, data, token);
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json", // Add Content-Type header
      },
    });
  }
  SaveApiCall(url, data, token) {
    return axios.post(url, data, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  GetApiCall(url, token) {
    return axios.get(url, { headers: { Authorization: "Bearer " + token } });
  }
  GetApi(url) {
    return axios.get(url);
  }
  PutApiCall(url, data, token) {
    return axios.put(url, data, {
      headers: { Authorization: "Bearer " + token },
    });
  }
  DelApiCall(url, token) {
    return axios.delete(url, { headers: { Authorization: "Bearer " + token } });
  }
}

//const SERVER = `http://195.35.20.207:7087`;
const SERVER = `http://localhost:7087`;


export const urls = {
  LOGIN: `${SERVER}/auth/login`,

  MANAGER_LIST: `${SERVER}/api/manager/managerslist`,
  ADD_MANAGER: `${SERVER}/api/manager/save`,
  UPDATE_MANAGER: `${SERVER}/api/manager/managers`,

  EVENTS_LIST: `${SERVER}/auth/events/list`,
  EVENT_SAVE: `${SERVER}/api/event/save`,
  EVENT_UPDATE: `${SERVER}/api/event`,
  EVENT_DELETE: `${SERVER}/api/event/delete`,


  SERVICE_LIST: `${SERVER}/auth/servicemaster/list`,
  ADD_SERVICE: `${SERVER}/api/servicemaster/save`,
  UPDATE_SERVICE: `${SERVER}/api/servicemaster`,
  DELETE_SERVICE: `${SERVER}/api/servicemaster/delete`,


  ENQUIRY_LIST: `${SERVER}/api/enquiry/list`,

  BOOKING_LIST: `${SERVER}/api/booking/list`,
  BOOKING_SAVE: `${SERVER}/api/booking/save`,

  LOCATION_LIST: `${SERVER}/auth/location/list`,
  LOCATION_ADD: `${SERVER}/api/location/save`,
  LOCATION_UPDATE: `${SERVER}/api/location`,
  STATE_LIST: `${SERVER}/auth/state/list`,
  STATE_ADD: `${SERVER}/api/state/save`,

};

export default new AuthApiService();
