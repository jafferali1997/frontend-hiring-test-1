import { request, success, failure, USER_REQUEST } from './utilities';
import { userLogin, refreshToken } from '../api';
export function login(loginData, setCookiesforUser) {
    return (dispatch) => {
        dispatch(request(USER_REQUEST.USER_SIGNIN_REQUEST));
        userLogin(loginData).then(
            response => {
                if (response.status === 201) {
                    dispatch(success(USER_REQUEST.USER_SIGNIN_SUCCESS, response.data))
                    setCookiesforUser(response.data)
                }
                else {
                    dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function RefreshToken(loginData, setCookiesforUser, auth) {
    return (dispatch) => {
        dispatch(request(USER_REQUEST.USER_SIGNIN_REQUEST));
        refreshToken(loginData, auth).then(
            response => {
                if (response.status === 201) {
                    dispatch(success(USER_REQUEST.USER_SIGNIN_SUCCESS, response.data))
                    setCookiesforUser(response.data)
                }
                else {
                    dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
