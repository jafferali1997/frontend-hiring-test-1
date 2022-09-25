const ERROR = {
    SYSTEM_ERROR: "System error. Please try again later!"
};
const PATH = {
    NOPAGE: "*",
    LOGIN: "/",
    CALL_LIST:"/call-list"
};

const APP_KEY = "d44e3d910d38a928e0be"
const APP_CLUSTER = "eu"

const baseUrl = "https://frontend-test-api.aircall.io/";
const APP_SETTINGS = {
    API_PATH: {
        LOGIN: {
            login: baseUrl + "auth/login",
            refresh: baseUrl + "auth/refresh-token",
        },
        CALL: {
            call: baseUrl + "calls/",
            updateArchive: baseUrl + "calls/:id/archive",
        },
        NOTES:{
            notes: baseUrl + "calls/:id/note"
        }
    }
};
export {
    ERROR,
    PATH,
    APP_SETTINGS,
    APP_KEY,
    APP_CLUSTER 
};
