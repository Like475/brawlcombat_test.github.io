import { getRequest, postRequest } from '../core';

export const getBoostsList = () => getRequest('/boosts', {});
export const buyBoost = (id) => postRequest(`/boosts/${id}/buy`, {});
