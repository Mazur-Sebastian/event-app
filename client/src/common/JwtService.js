export const JWT_TOKEN = 'JWT_TOKEN';

export const getToken = () => {
    return localStorage.getItem(JWT_TOKEN);
};

export const saveToken = token => {
    localStorage.setItem(JWT_TOKEN, token);
};

export const destroyToken = () => {
    localStorage.removeItem(JWT_TOKEN);
};
