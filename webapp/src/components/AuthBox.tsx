import React, { Component } from 'react';
import './AuthBox.css';

interface AuthBoxProps {
    logoUrl?: string;
}

interface AuthBoxState {
    mode: 'initial' | 'signup' | 'login';
    username: string;
    email: string;
    password: string;
    errorMessage: string;
}

class AuthBox extends Component<AuthBoxProps, AuthBoxState> {
    constructor(props: AuthBoxProps) {
        super(props);
        this.state = {
            mode: 'initial',
            username: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    }

    // Handlers for switching modes
    handleSignUpClick = () => {
        this.setState({ mode: 'signup' });
    };

    handleLoginClick = () => {
        this.setState({ mode: 'login' });
    };

    handleBackClick = () => {
        this.setState({ mode: 'initial', username: '', email: '', password: '', errorMessage: '' });
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<AuthBoxState, keyof AuthBoxState>);
    };

    handleSignUpSubmit = () => {
        const { username, email, password, errorMessage } = this.state;
        console.log('Sign Up Data:', { username, email, password });

        this.setState({ ['errorMessage']: 'Username must be at least 3 characters long.'});
    };

    handleLoginSubmit = () => {
        const { email, password } = this.state;
        console.log('Login Data:', { email, password });
    };

    render() {
        const { logoUrl } = this.props;
        const { mode, username, email, password, errorMessage } = this.state;

        return (
            <div className="authbox-container">
                <div className="authbox">
                    <img
                        src={logoUrl || 'https://via.placeholder.com/100x100'}
                        className="authbox-logo"
                        alt="logo"
                    />

                    {/* Conditional rendering based on the mode */}
                    {mode === 'initial' && (
                        <div className="authbox-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={this.handleSignUpClick}
                            >
                                Sign Up
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={this.handleLoginClick}
                            >
                                Login
                            </button>
                        </div>
                    )}

                    {mode === 'signup' && (
                        <div className="authbox-form">
                            <p className='error-message' style={{display: errorMessage.length ? 'block' : 'none'}}>
                                {errorMessage}
                            </p>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="input-field"
                                value={username}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input-field"
                                value={email}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input-field"
                                value={password}
                                onChange={this.handleInputChange}
                            />
                            <button className="btn btn-success" onClick={this.handleSignUpSubmit}>
                                Sign Up
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={this.handleBackClick}
                            >
                                Back
                            </button>
                        </div>
                    )}

                    {mode === 'login' && (
                        <div className="authbox-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input-field"
                                value={email}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input-field"
                                value={password}
                                onChange={this.handleInputChange}
                            />
                            <button className="btn btn-primary" onClick={this.handleLoginSubmit}>
                                Login
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={this.handleBackClick}
                            >
                                Back
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AuthBox;
