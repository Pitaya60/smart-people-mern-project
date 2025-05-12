import { configureStore } from '@reduxjs/toolkit'
import ReqApi from './features/Requarments/req'
import initiativesApi from './features/orders/initiativesApi' 
import cartReducer from './features/сart/CartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [ReqApi.reducerPath]: ReqApi.reducer,
    [initiativesApi.reducerPath]: initiativesApi.reducer, // добавили
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ReqApi.middleware,
      initiativesApi.middleware // добавили
    ),
})
