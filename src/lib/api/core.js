import axios from 'axios';

const url = 'https://clicker.lightforum.su/api/v1';

const authRequest = () => {
	const rawInitData = window.Telegram.WebApp.initData;
	if (rawInitData == '') {
		return null;
	}

	const paramsInitData = new URLSearchParams(rawInitData);
	const initData = {};
	for (const [key, value] of paramsInitData.entries()) {
		initData[key] = value;
	}
	initData.user = JSON.parse(initData.user);

	return axios
		.post(`${url}/users/auth`, initData)
		.then((response) => {
			localStorage.setItem('token', response.body.token.access_token);
			return response.body.token.access_token;
		})
		.catch((error) => {
			console.error(error);
			throw error;
		});
};

export const getRequest = (endpoint, params) => {
	let token = localStorage.getItem('token');
	if (!token) {
		token = authRequest();
	}

	return axios
		.get(`${url}${endpoint}`, {
			params: params,
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then((response) => response.data)
		.catch((error) => {
			if (error.response && error.response.status === 403) {
				const newToken = authRequest();
				if (newToken == null) {
					console.error(error);
					throw error;
				}
				return getRequest(endpoint, params);
			} else {
				console.error(error);
				throw error;
			}
		});
};

export const postRequest = (endpoint, body) => {
	let token = localStorage.getItem('token');
	if (!token) {
		token = authRequest();
	}

	return axios
		.post(`${url}${endpoint}`, body, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then((response) => response.data)
		.catch((error) => {
			if (error.response && error.response.status === 403) {
				const newToken = authRequest();
				if (newToken == null) {
					console.error(error);
					throw error;
				}
				return getRequest(endpoint, body);
			} else {
				console.error(error);
				throw error;
			}
		});
};
