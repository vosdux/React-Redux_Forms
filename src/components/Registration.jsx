import React from 'react';
import './Registration.css'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChage = this.onEmailChage.bind(this);
        this.onPasswordChage = this.onPasswordChage.bind(this);
        this.onRepeatPasswordChage = this.onRepeatPasswordChage.bind(this);

    }
    onEmailChage(event) {
        this.props.setEmailText(event.target.value)
    }
    onPasswordChage(event) {
        this.props.setPasswordText(event.target.value)
    }
    onRepeatPasswordChage(event) {
        this.props.setRepeatPasswordText(event.target.value)
    }
    render() {
        return(
            <div className="registration">
                <h3>Sing Up</h3>
                <form>
                    <div>
                        <input 
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            onChange={this.onEmailChage}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onPasswordChage}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Repeat password"
                            onChange={this.onRepeatChage}
                        />
                    </div>
                    <div>
                        <button>Sing Up</button>
                    </div>
                </form>
            </div>
        );
    }
}