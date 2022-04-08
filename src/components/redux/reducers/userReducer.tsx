import { TodoListItem } from '../../../types';
import { ActionTypes } from '../action-types';

interface UserState {
  loading: boolean;
  tasks: Array<TodoListItem>;
}

const initialState: UserState = {
  tasks: [],
  loading: false,
};

export const UserReducer = (
  state: UserState = initialState,
  { type, payload }: any
): UserState => {
  switch (type) {
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: payload };

    case ActionTypes.READ_DATA:
      return { ...state, loading: true };
    case ActionTypes.READ_DATA_SUCCESS:
      return { ...state, tasks: payload, loading: false };
    case ActionTypes.READ_DATA_FAILURE:
      return { ...state, loading: false };
    // case ActionTypes.UPDATE_DATA:
    //   return { update: payload };

    // case ActionTypes.DELETE_DATA:
    //   return { delete: payload };

    default:
      return state;
  }
};
