import { request, success, failure, CALL_REQUEST } from './utilities';
import { callList } from '../api';
export function CallListAction(data, auth) {
    return (dispatch) => {
        dispatch(request(CALL_REQUEST.CALL_LIST_REQUEST));
        callList(data, auth).then(
            response => {
                if (response.status === 200) {
                    dispatch(success(CALL_REQUEST.CALL_LIST_SUCCESS, response.data))
                }
                else {
                    dispatch(failure(CALL_REQUEST.CALL_LIST_FAILURE, response.message))
                }
            },
            error => {
                dispatch(failure(CALL_REQUEST.CALL_LIST_FAILURE, (error && error.response && error.response && error.response.message ? error.response.message : error.message)))
            }
        )
    };
}

export function UpdateCallListAction (data){
    return (dispatch) => dispatch(success(CALL_REQUEST.CALL_LIST_UPDATE, data));
}
