import {configureStore} from '@reduxjs/toolkit';
import {addDeleteSlice} from './addDeleteSlide';

// Infer the `RootState` and `AppDispatch` types from the store itself

export const store = configureStore({
  reducer: {counter: addDeleteSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
