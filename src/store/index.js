import { configureStore } from "@reduxjs/toolkit";
import serviceList from './serviceList'
import serviceAdd from './serviceAdd'

const store = configureStore({
  reducer: {
    serviceList,
    serviceAdd
  }
})

export default store