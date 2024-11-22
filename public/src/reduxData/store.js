import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import addManagerReducer from './managerSlice';
import updateRec  from './UpdateSlice';

const store = configureStore({
    reducer: {
        authUserInfo: authReducer,
        managerInfo: addManagerReducer,
        updatadata:updateRec,

    },
});

export default store;



