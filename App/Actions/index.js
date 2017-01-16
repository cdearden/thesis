export const reportEvent = newNotification => ({
  type: 'REPORT_EVENT',
  newNotification,
});

export const updateRegion = region => ({
  type: 'UPDATE_REGION',
  region,
});
export const getPosition = () => ({
  type: 'GET_POSITION',
});
export const updatePosition = position => ({
  type: 'UPDATE_POSITION',
  userLocation: {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  },
});
// !!! this is duplicate !!!
export const loadEvents = events => ({
  type: 'UPDATE_EVENTS',
  events,
});

export const saveWatchID = watchID => ({
  type: 'SAVE_WATCHID',
  watchID,
});
export const updateEvent = events => ({
  type: 'UPDATE_EVENTS',
  events,
});
export const fetchEvents = (token, userLocation) => ({
  type: 'FETCH_EVENTS',
  token,
  userLocation,
});
export const getUserInfo = (userName = '', userInterests = [], token = {}) => ({
  type: 'GET_USER_INFO',
  userName,
  userInterests,
  token,
});
export const sendVoteToState = events => ({
  type: 'STATE_VOTE_EVENT',
  events,
});
export const sendVoteToServer = vote => ({
  type: 'SERVER_VOTE_EVENT',
  vote,
});

/* ------------- Types and Action Creators ------------- */
export const request = () => ({
  type: 'REQUEST',
});

export const loginSuccess = (username, token, userId) => {
  return {
    type: 'SUCCESS',
    username,
    token,
    userId
  };
};

export const authFail = error => ({
  type: 'AUTH_FAIL',
  error,
});

export const loginRequest = (username, password) => ({
  type: 'LOGIN_REQUEST',
  username,
  password,
});

export const registerRequest = (username, password) => ({
  type: 'SIGNUP_REQUEST',
  username,
  password,
});
