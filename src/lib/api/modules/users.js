import { getRequest } from '../core';

export const getMe = () => getRequest('/users/me', {});
export const getInvited = () => getRequest('/users/invited', {});
export const getUser = (id) => getRequest(`/users/${id}`, {});
