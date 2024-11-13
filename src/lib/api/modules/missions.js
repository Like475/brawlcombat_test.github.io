import { getRequest, postRequest } from '../core';

export const getMissionsList = () => getRequest('/tasks', {});
export const checkMission = (id) => postRequest(`/tasks/${id}/check`, {});
