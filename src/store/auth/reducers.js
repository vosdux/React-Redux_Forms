import { AUTH_CHAGE_EMAIL_TEXT, AUTH_CHAGE_PASSWORD_TEXT } from "./actions";

const defaultState = {
    email: '',
    password: ''
};

export const authReducer = (state = defaultState, action) => {
    console.log(state);
    switch(action.type) {
        case AUTH_CHAGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            }
        case AUTH_CHAGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}