import { USER_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
    loginLoading: false,
    loginSuccess: false,
    loginFailure: false,
    loginError: null,
    user: null,

    updateTenantLoading: false,
    updateTenantSuccess: false,
    updateTenantFailure: false,
    updateTenantError: null,

    statLoading: false,
    statSuccess: false,
    statFailure: false,
    statError: null,
    stats: [],

    profileLoading: false,
    profileSuccess: false,
    profileFailure: false,
    profileError: null,
    profile: [],

    getusercodeLoading: false,
    getusercodeSuccess: false,
    getusercodeFailure: false,
    getusercodeError: null,
    getusercode: [],

    getuseremailLoading: false,
    getuseremailSuccess: false,
    getuseremailFailure: false,
    getuseremailError: null,
    getuseremail: [],

    resetpasswordLoading: false,
    resetpasswordSuccess: false,
    resetpasswordFailure: false,
    resetpasswordError: null,
    resetpassword: [],

    verifyLoading: false,
    verifySuccess: false,
    verifyFailure: false,
    verify: [],
    verifyError: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_REQUEST.VERIFY_EMAIL_RESET:
            return {
                ...state,
                verifyLoading: false,
                verifySuccess: false,
                verifyFailure: false,
                verifyError: null
            }
        case USER_REQUEST.VERIFY_EMAIL_REQUEST:
            return {
                ...state,
                verifyLoading: true,
                verifySuccess: false,
                verifyFailure: false,
                verifyError: null
            }
        case USER_REQUEST.VERIFY_EMAIL_SUCCESS:
            return {
                ...state,
                verifyLoading: false,
                verifySuccess: true,
                verifyFailure: false,
                verify: action.payload,
                verifyError: null
            }
        case USER_REQUEST.VERIFY_EMAIL_FAILURE:
            return {
                ...state,
                verifyLoading: false,
                verifySuccess: false,
                verifyFailure: true,
                verifyError: action.payload
            }
        case USER_REQUEST.GET_USER_PROFILE_REQUEST:
            return {
                ...state,
                profileLoading: true,
                profileSuccess: false,
                profileFailure: false,
                profileError: null,
                profile: []
            }
        case USER_REQUEST.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profileLoading: false,
                profileSuccess: true,
                profileFailure: false,
                profileError: null,
                profile: action.payload
            }
        case USER_REQUEST.GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                profileLoading: false,
                profileSuccess: false,
                profileFailure: true,
                profileError: action.payload
            }
        case USER_REQUEST.GET_USER_CODE_REQUEST:
            return {
                ...state,
                getusercodeLoading: true,
                getusercodeSuccess: false,
                getusercodeFailure: false,
                getusercodeError: null,
                getusercode: []
            }
        case USER_REQUEST.GET_USER_CODE_SUCCESS:
            return {
                ...state,
                getusercodeLoading: false,
                getusercodeSuccess: true,
                getusercodeFailure: false,
                getusercodeError: null,
                getusercode: action.payload
            }
        case USER_REQUEST.GET_USER_CODE_FAILURE:
            return {
                ...state,
                getusercodeLoading: false,
                getusercodeSuccess: false,
                getusercodeFailure: true,
                getusercodeError: action.payload
            }
        case USER_REQUEST.GET_USER_CODE_RESET:
            return {
                ...state,
                getusercodeLoading: false,
                getusercodeSuccess: false,
                getusercodeFailure: false,
                getusercodeError: null,
                getusercode: []
            }
        case USER_REQUEST.GET_USER_EMAIL_REQUEST:
            return {
                ...state,
                getuseremailLoading: true,
                getuseremailSuccess: false,
                getuseremailFailure: false,
                getuseremailError: null,
                getuseremail: []
            }
        case USER_REQUEST.GET_USER_EMAIL_SUCCESS:
            return {
                ...state,
                getuseremailLoading: false,
                getuseremailSuccess: true,
                getuseremailFailure: false,
                getuseremailError: null,
                getuseremail: action.payload
            }
        case USER_REQUEST.GET_USER_EMAIL_FAILURE:
            return {
                ...state,
                getuseremailLoading: false,
                getuseremailSuccess: false,
                getuseremailFailure: true,
                getuseremailError: action.payload
            }
        case USER_REQUEST.GET_USER_EMAIL_RESET:
            return {
                ...state,
                getuseremailLoading: false,
                getuseremailSuccess: false,
                getuseremailFailure: false,
                getuseremailError: null,
                getuseremail: []
            }
        case USER_REQUEST.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetpasswordLoading: true,
                resetpasswordSuccess: false,
                resetpasswordFailure: false,
                resetpasswordError: null,
                resetpassword: []
            }
        case USER_REQUEST.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetpasswordLoading: false,
                resetpasswordSuccess: true,
                resetpasswordFailure: false,
                resetpasswordError: null,
                resetpassword: action.payload
            }
        case USER_REQUEST.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetpasswordLoading: false,
                resetpasswordSuccess: false,
                resetpasswordFailure: true,
                resetpasswordError: action.payload
            }
        case USER_REQUEST.GET_STAT_REQUEST:
            return {
                ...state,
                statLoading: true,
                statSuccess: false,
                statFailure: false,
                statError: null
            }
        case USER_REQUEST.GET_STAT_SUCCESS:
            return {
                ...state,
                statLoading: false,
                statSuccess: true,
                statFailure: false,
                statError: null,
                stats: action.payload
            }
        case USER_REQUEST.GET_STAT_FAILURE:
            return {
                ...state,
                statLoading: false,
                statSuccess: false,
                statFailure: true,
                statError: action.payload
            }
        case USER_REQUEST.USER_SIGNIN_RESET:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: false,
                loginFailure: false,
                loginError: null,
            }
        case USER_REQUEST.USER_SIGNIN_REQUEST:
            return {
                ...state,
                loginLoading: true,
                loginSuccess: false,
                loginFailure: false,
                loginError: null,
            }
        case USER_REQUEST.USER_SIGNIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: false,
                loginFailure: true,
                loginError: action.payload
            }
        case USER_REQUEST.USER_SIGNIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: true,
                loginFailure: false,
                loginError: null,
                user: action.payload
            }
        case USER_REQUEST.UPDATE_TENANT_PROFILE_REQUEST:
            return {
                ...state,
                updateTenantLoading: true,
                updateTenantSuccess: false,
                updateTenantFailure: false,
                updateTenantError: null
            }
        case USER_REQUEST.UPDATE_TENANT_PROFILE_SUCCESS:
            return {
                ...state,
                updateTenantLoading: false,
                updateTenantSuccess: true,
                updateTenantFailure: false,
                updateTenantError: null
            }
        case USER_REQUEST.UPDATE_TENANT_PROFILE_FAILURE:
            return {
                ...state,
                updateTenantLoading: false,
                updateTenantSuccess: false,
                updateTenantFailure: true,
                updateTenantError: action.payload
            }
        default:
            return state;
    }
};
