import { HTTP } from '../../common/HTTPService';
import { SET_USER, SET_LOADING } from '../mutations.type';
import { LOGIN, REGISTER } from '../actions.type';
import { saveToken, destroyToken } from '../../common/JwtService';

export const userModule = {
    state: { user: { email: '', username: '' }, isLoading: false },
    mutations: {
        [SET_USER]: (state, { user }) => {
            state.user = user;
            state.isLoading = false;
        },
        [SET_LOADING]: state => (state.isLoading = true)
    },
    actions: {
        [LOGIN]: async ({ commit }, payload) => {
            commit(SET_LOADING);
            try {
                const {
                    data: { accessToken }
                } = await HTTP.post('/auth/login', payload);
                saveToken(accessToken);
                console.log(accessToken);
                const { data } = await HTTP.post('/auth/verify', { accessToken });
                const userData = await HTTP.get(`/user/getUser/${data.id}`);
                setTimeout(function() {
                    commit(SET_USER, { user: userData.data });
                }, 15000);
                // commit(SET_USER, { user: userData.data });
            } catch (err) {
                destroyToken();
                console.log(err);
            }
        },
        [REGISTER]: async ({ commit }, payload) => {
            commit(SET_LOADING);
            try {
                const { accessToken } = await HTTP.post('/auth/register', payload);
                saveToken(accessToken);
                const { data } = await HTTP.post('/auth/verify', { accessToken });
                const userData = await HTTP.get(`user/getUser/${data.id}`);
                commit(SET_USER, userData);
            } catch (err) {
                destroyToken();
                console.log(err);
            }
        }
    },
    getters: {
        currentUser: state => {
            return state.user;
        },
        isLoading: state => {
            return state.isLoading;
        }
    }
};
