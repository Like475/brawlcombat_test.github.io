import { getRequest, postRequest } from '../core';

export const getItemsList = () => getRequest('/shop', {});
export const getItem = (id) => getRequest(`/shop/${id}`, {});
export const buyItem = (id) => postRequest(`/shop/${id}/buy`, {});
