import { router } from '../../router';
import { HTTP } from '../../common/HTTPService';
import { SET_USER, SET_LOADING, SET_AUTH } from '../mutations.type';
import { LOGIN, REGISTER } from '../actions.type';
import { saveToken, destroyToken } from '../../common/JwtService';

export const userModule = {
	state: {
		user: { email: '', username: '' },
		isLoading: false,
		isAuthenticated: false,
	},
	mutations: {
		[SET_USER]: (state, { user }) => {
			state.user = user;
			state.isLoading = false;
		},
		[SET_LOADING]: state => (state.isLoading = !state.isLoading),
		[SET_AUTH]: (state, payload) => (state.isAuthenticated = payload),
	},
	actions: {
		[LOGIN]: async ({ commit }, payload) => {
			commit(SET_LOADING);

			try {
				const {
					data: { accessToken },
				} = await HTTP.post('/auth/login', payload);
				saveToken(accessToken);

				const { data } = await HTTP.get(`/auth/verify/${accessToken}`);
				const userData = await HTTP.get(`/user/getUser/${data.id}`);

				commit(SET_USER, { user: userData.data });
				commit(SET_AUTH, true);
				commit(SET_LOADING);
				router.push('dashboard');
			} catch (err) {
				commit(SET_AUTH, false);
				destroyToken();
				console.log(err);
			}
		},
		[REGISTER]: async ({ commit }, payload) => {
			commit(SET_LOADING);

			try {
				const { accessToken } = await HTTP.post(
					'/auth/register',
					payload,
				);
				saveToken(accessToken);

				const { data } = await HTTP.get(`/auth/verify/${accessToken}`);
				const userData = await HTTP.get(`user/getUser/${data.id}`);

				commit(SET_USER, { user: userData.data });
				commit(SET_AUTH, true);
				commit(SET_LOADING);
				router.push('dashboard');
			} catch (err) {
				destroyToken();
				console.log(err);
			}
		},
	},
	getters: {
		currentUser: state => {
			return state.user;
		},
		isLoading: state => {
			return state.isLoading;
		},
		isAuthenticated: state => {
			return state.isAuthenticated;
		},
	},
};
