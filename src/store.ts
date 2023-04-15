import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './counterSlide';

// Infer the `RootState` and `AppDispatch` types from the store itself

export const store = configureStore({
  reducer: {counter: counterSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
