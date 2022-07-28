import { combineReducers,configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import globalSlice from "./reducers/globalSlice";
import usersSlice from "./reducers/userSlice";

const combinedReducer = combineReducers({
  global: globalSlice,
  users : usersSlice
});

export const store = configureStore({
  reducer: combinedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
