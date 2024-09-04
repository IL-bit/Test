import { createAction } from "@reduxjs/toolkit"

export const getKey= createAction('GETKEY');
export const getData= createAction('GETDATA');
export const sendData= createAction('SENDDATA');
export const addData = createAction('ADDDATA');
export const deleteData= createAction('DELETEDATA');