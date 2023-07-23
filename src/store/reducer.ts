import { createReducer, createAction } from '@reduxjs/toolkit';
import { ITrainInfo } from '../services/trains/interfaces';

export const actions = {
    fetchTrainsInfo: createAction<ITrainInfo[]>('trains/fetch'),
    fail: createAction<string | null>('data/fetchTrainsFail'),
    setDataLoadedStatus: createAction<boolean>('data/setDataLoadedStatus'),
};

export interface State {
    trainsList: ITrainInfo[],
    isLoading: boolean,
    error: string | null,
};

const initialState: State = {
    trainsList: [],
    isLoading: false,
    error: '',
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.fetchTrainsInfo, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.trainsList = payload;
        })
        .addCase(actions.fail, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(actions.setDataLoadedStatus, (state, { payload }) => {
            state.isLoading = payload;
        });
});

export default actions;
