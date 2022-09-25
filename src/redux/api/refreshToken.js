import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function refreshToken(userData, auth) {
    return axios.post(APP_SETTINGS.API_PATH.LOGIN.refresh, userData,{
        headers: {
            Authorization: "Bearer " + auth.turringTest.access_token,
        },
    })
}