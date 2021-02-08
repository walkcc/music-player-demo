import { User } from './types';

export const SET_USER = 'SET_USER';

export function setUser(user: User) {
    return {type: SET_USER, user};
}
