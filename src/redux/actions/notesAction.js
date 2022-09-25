import { success, failure, CALL_REQUEST } from './utilities';
import { addNotes } from '../api';
export function NotesAction(data, auth, id) {
    return (dispatch) => {
        dispatch(success(CALL_REQUEST.NOTES_REQUEST, {data: data, id: id}));
        addNotes(data, auth, id).then(
            response => {
                if (response.status !== 200) {
                    dispatch(failure(CALL_REQUEST.NOTES_FAILURE, {data:response.message, id:id}))
                }
            },
            error => {
                dispatch(failure(CALL_REQUEST.NOTES_FAILURE, {data:error && error.response && error.response && error.response.message ? error.response.message : error.message, id:id}))
            }
        )
    };
}