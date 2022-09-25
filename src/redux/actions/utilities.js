function request(actionType) {
    return {
        type: actionType
    }
}
function success(actionType, response) {
    return {
        type: actionType,
        payload: response
    }
}
function failure(actionType, error) {
    return {
        type: actionType,
        payload: error
    }
}
const USER_REQUEST = {
    USER_SIGNIN_RESET: "USER_SIGNIN_RESET",
    USER_SIGNIN_REQUEST: "USER_SIGNIN_REQUEST",
    USER_SIGNIN_SUCCESS: "USER_SIGNIN_SUCCESS",
    USER_SIGNIN_FAILURE: "USER_SIGNIN_FAILURE",
}
const CALL_REQUEST = {
    CALL_LIST_REQUEST: "CALL_LIST_REQUEST",
    CALL_LIST_SUCCESS: "CALL_LIST_SUCCESS",
    CALL_LIST_FAILURE: "CALL_LIST_FAILURE",

    NOTES_REQUEST: "NOTES_REQUEST",
    NOTES_FAILURE: "NOTES_FAILURE",

    CALL_LIST_UPDATE:"CALL_LIST_UPDATE"
}




export {
    request,
    success,
    failure,
    USER_REQUEST,
    CALL_REQUEST,
}
