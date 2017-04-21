import * as types from '../actions/constants';

const initialState = {
    count: 0
};

export default (state = initialState, { type }) => {
    switch (type) {
        case types.INCREMENT:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};
