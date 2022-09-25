import { CALL_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
  callLoading: false,
  callSuccess: false,
  callFailure: false,
  callError: null,
  callList: null,
};

export const callReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALL_REQUEST.CALL_LIST_REQUEST:
      return {
        ...state,
        callLoading: true,
        callSuccess: false,
        callFailure: false,
        callError: null,
      };
    case CALL_REQUEST.CALL_LIST_FAILURE:
      return {
        ...state,
        callLoading: false,
        callSuccess: false,
        callFailure: true,
        callError: action.payload,
      };
    case CALL_REQUEST.CALL_LIST_SUCCESS:
      return {
        ...state,
        callLoading: false,
        callSuccess: true,
        callFailure: false,
        callError: null,
        callList: action.payload,
      };
      case CALL_REQUEST.NOTES_REQUEST:
        return {
          ...state,
          callLoading: true,
          callSuccess: false,
          callFailure: false,
          callError: null,
          callList: {...state.callList, nodes: state.callList.nodes.map(node=> {
            if(node.id === action.payload.id){
                return{
                    ...node,
                    notes: [...node.notes, {id:action.payload.id, content: action.payload.data.content}]
                }
            }
            return node
          })}
        };
      case CALL_REQUEST.NOTES_FAILURE:
        return {
          ...state,
          callLoading: false,
          callSuccess: false,
          callFailure: true,
          callError: action.payload.data,
          callList: {...state.callList, nodes: state.callList.nodes.map(node=> {
            if(node.id === action.payload.id){
                return{
                    ...node,
                    notes: node.notes.pop()
                }
            }
            return node
          })}
        };
      case CALL_REQUEST.CALL_LIST_UPDATE:
        return {
            ...state,
            callLoading: false,
            callSuccess: false,
            callFailure: false,
            callError: action.payload.data,
            callList: {...state.callList, nodes: state.callList.nodes.map(node=> {
              if(node.id === action.payload.id){
                  return{
                      ...action.payload
                  }
              }
              return node
            })}
          };
    default:
      return state;
  }
};
