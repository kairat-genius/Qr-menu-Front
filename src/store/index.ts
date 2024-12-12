import { configureStore } from '@reduxjs/toolkit';
import signSlice from './slices/signSlice';

export const store = configureStore({
  reducer: {
    sign: signSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
