import Auth from "../components/Auth";
import { connect } from 'react-redux';
import { setEmailText, setPasswordText } from '../store/auth/actions';

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
}

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)