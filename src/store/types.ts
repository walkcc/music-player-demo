import {SET_USER} from './actions';

export interface User {
    name?:string
}

export interface appState {
    user:User
}

export interface SetUserAction {
    type:typeof SET_USER
    user:User
}


export type AppActionTypes = SetUserAction
