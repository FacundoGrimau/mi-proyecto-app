import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fetures/Counter/CounterSlice";
import shopReducer from "../fetures/Shop/ShopSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore ({
    reducer: {
        counter: counterReducer,
        shop: shopReducer, 
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
});

setupListeners(store.dispatch)

export default store;