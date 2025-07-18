import * as types from 'constants/pendingLastBlock';

const initialState = {
  data: {},
  loaded: false,
  loading: false,
  error: null,
};

export default function pendingLastBlock(state = initialState, action) {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
      };
    case types.LOAD_FAIL:
      return {
        ...state,
        data: null,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
