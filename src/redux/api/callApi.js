import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function callList(data, auth) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.CALL.call}?offset=${data.pageNo}&limit=${data.pageSize}`,
    {
      headers: {
        Authorization: "Bearer " + auth.turringTest.access_token,
      },
    }
  );
}

export function updateArchiveApi(id, auth) {
  return axios.put(
    APP_SETTINGS.API_PATH.CALL.updateArchive.replace(":id", id),
    {},
    {
      headers: {
        Authorization: "Bearer " + auth.turringTest.access_token,
      },
    }
  );
}
