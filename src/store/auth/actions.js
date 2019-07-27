export const AUTH_CHAGE_EMAIL_TEXT = 'AUTH_CHAGE_EMAIL_TEXT';
export const AUTH_CHAGE_PASSWORD_TEXT = 'AUTH_CHAGE_PASSWORD_TEXT';

export const setEmailText = (email) => {
    return {
        type: AUTH_CHAGE_EMAIL_TEXT,
        payload: email
    }
}

export const setPasswordText = (password) => {
    return {
        type: AUTH_CHAGE_PASSWORD_TEXT,
        payload: password
    }
}