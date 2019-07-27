import React from 'react';
import './Auth.css';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }
    render() {
        const { password, email } = this.props;
        return (
            <div className="auth">
                <h3>Sing In</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            value={email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button>Sing In</button>
                    </div>
                </form>
            </div>
        );
    }
}