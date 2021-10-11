import { SHOW_INFO } from "../constants/user.constant.js";
export const defaultState = {}

export const ReducerFunction = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_INFO:
            let newState = {
                ...state, ...action.data
            };
            return newState;
        default:
            return state;
    }

};
