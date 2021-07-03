import { applyMiddleware, combineReducers, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { NguoiDungReducer } from './NguoiDungReducer';
import { LoadingReducer } from './LoadingReducer';
import { AdminReducer } from './AdminReducer';
const rootReducer = combineReducers({
    //chứa các state ứng dụng
    NguoiDungReducer,
    LoadingReducer,
    AdminReducer,
})
// applyMiddleware(reduxThunk)
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));//applyMiddleware(reduxThunk)
//middle ware để gom nhiều lần gọi api vào 1 file, thay vì mỗi file gọi 1 lần (action)
