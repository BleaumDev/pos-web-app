import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from './slices/authSlice';
// import currentProgramReducer from './slices/currentProgramSlice';
// import devModeSliceReducer from './slices/dev-mode';
// import investmentSliceReducer from './slices/investmentSlice';

const reducers = combineReducers({
  // investments: investmentSliceReducer,
  // currentSelectedProgram: currentProgramReducer,
  // auth: authReducer,
  // devMode: devModeSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['kyc', 'devMode'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV === 'development',
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
