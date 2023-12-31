/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./modules/auth/state/login-slice";
import navDrawerReducer from "./modules/dashboard/state/nav-drawer-slice";
import ordersReducer from "./modules/order-management/state/orders-slice";
import registrationReducer from "./modules/auth/state/registration-slice";
import profileReducer from "./modules/user/state/profile-slice";

const store = configureStore({
  devTools: process.env.NODE_ENV != "production",
  reducer: {
    login: loginReducer,
    navDrawer: navDrawerReducer,
    orders: ordersReducer,
    profile: profileReducer,
    registration: registrationReducer,
  },
});

export default store;