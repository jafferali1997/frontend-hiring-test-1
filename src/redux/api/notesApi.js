import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addNotes(userData,auth, id) {
    return axios.post(APP_SETTINGS.API_PATH.NOTES.notes.replace(":id", id), userData, {
        headers: {
            Authorization: "Bearer " + auth.turringTest.access_token,
        },
    })
}