import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchGoals = () => dispatch => {

    dispatch(goalsLoading());

    return fetch(baseUrl + 'goals')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(goals=> dispatch(addGoals(goals)))
        .catch(error => dispatch(goalsFailed(error.message)));
};

export const goalsLoading = () => ({
    type: ActionTypes.GOALS_LOADING
});

export const goalsFailed = errMess => ({
    type: ActionTypes.GOALS_FAILED,
    payload: errMess
});

export const addGoals = goals => ({
    type: ActionTypes.ADD_GOALS,
    payload: goals
});