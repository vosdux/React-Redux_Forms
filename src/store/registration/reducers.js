import { REG_CHAGE_EMAIL_TEXT, REG_CHAGE_PASSWORD_TEXT, REG_CHAGE_REPEAT_PASSWORD_TEXT } from "./actions";

const defaultState ={
    email: '',
    passwrod: '',
    repeatPassword: ''
}

export const registrationReducer = (state = defaultState, action) => {
    console.log(state);
    switch(action.type) {
        case REG_CHAGE_EMAIL_TEXT: 
            return {
                ...state,
                email: action.payload
            }
        case REG_CHAGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
        case REG_CHAGE_REPEAT_PASSWORD_TEXT:
            return {
                ...state,
                repeatPassword: action.payload
            }
        default:
            return state;
    }
}