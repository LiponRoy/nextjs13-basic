'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:"lipon Roy",
   counter:"0",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

export const {} = authSlice.actions

export default authSlice.reducer