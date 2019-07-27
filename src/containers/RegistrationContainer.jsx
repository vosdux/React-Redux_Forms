import { connect } from "react-redux";
import Registration from "../components/Registration";
import { setEmailText, setPasswordText, setRepeatPasswordText } from '../store/registration/actions';

const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword
    }
    
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText,
    setRepeatPasswordText
}

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);