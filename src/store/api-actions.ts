import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State, store } from ".";
import actions from "./reducer";
import api from '../services';
import { ERRORS, TIMEOUT_SHOW_ERROR } from "./constants";
import { processErrorHandle } from "../hooks/process-error-handle";

export const clearErrorAction = createAsyncThunk(
    'data/clearError',
    () => {
        setTimeout(
            () => store.dispatch(actions.fail(null)),
            TIMEOUT_SHOW_ERROR,
        );
    },
);

export const fetchTrainsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'trains/fetch',
    async (_, { dispatch }) => {
        try {
            dispatch(actions.setDataLoadedStatus(true));
            const response = await api.trains.getTrainsInfo();
            dispatch(actions.fetchTrainsInfo(response));
        } catch (error) {
            processErrorHandle(ERRORS.DEFAULT);
            throw new Error(String(error));
        } finally {
            dispatch(actions.setDataLoadedStatus(false));
        }
    },
);