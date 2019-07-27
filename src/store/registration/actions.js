export const REG_CHAGE_EMAIL_TEXT = 'REG_CHAGE_EMAIL_TEXT';
export const REG_CHAGE_PASSWORD_TEXT = 'REG_CHAGE_PASSWORD_TEXT';
export const REG_CHAGE_REPEAT_PASSWORD_TEXT = 'REG_CHAGE_REPEAT_PASSWORD_TEXT';

export const setEmailText = (email) => {
    return {
        type: REG_CHAGE_EMAIL_TEXT,
        payload: email
    }
}

export const setPasswordText = (password) => {
    return {
        type: REG_CHAGE_PASSWORD_TEXT,
        payload: password
    }
}

export const setRepeatPasswordText = (repeatPassword) => {
    return {
        type: REG_CHAGE_REPEAT_PASSWORD_TEXT,
        payload: repeatPassword
    }
}