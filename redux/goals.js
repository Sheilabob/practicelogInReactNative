import * as ActionTypes from './ActionTypes';

export const goals = (state = { isLoading: true,
                                     errMess: null,
                                     goals: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GOALS:
            return {...state, isLoading: false, errMess: null, goals: action.payload};

        case ActionTypes.GOALS_LOADING:
            return {...state, isLoading: true, errMess: null, goals: []}

        case ActionTypes.GOALS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};