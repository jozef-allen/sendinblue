import React from 'react';
import eye_blue from './eye-blue.png';
import eye_gray from './eye-gray.png';
import google_logo from './google_logo.png';
import apple_logo from './apple_logo.png';

export default function Login() {

    const [hidePassword, setHidePassword] = React.useState(true);
    const [formData, setFormData] = React.useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email address: ${formData.emailAddress}\nPassword: ${formData.password}`);
    };

    function hidePasswordToggle() {
        setHidePassword(function (prevState) {
            return !prevState;
        })
    }
    function appleLink() {
        window.location.href = "https://account-app.sendinblue.com/account/oauth/redirect/apple?is_source_app=0";
    }

    function googleLink() {
        window.location.href = "https://account-app.sendinblue.com/account/oauth/redirect/google?is_source_app=0";
    }

    return (
        <div className='login'>
            <h1>Log In</h1>
            <div className='label-container'>
                <label for="login_email" className="label">Email address</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input type="text" name="emailAddress" onChange={handleChange} required="required" data-email-type="unicode-email" data-violation="Please enter a valid email address." className='one' />
                </div>
                <div className='label-container'>
                    <label for="login_password" className="label">Password</label>
                </div>
                <div className='input-container'>
                    <input type={hidePassword ? 'password' : 'text'} name="password" onChange={handleChange} id="password" required="required" autocomplete="current-password" />
                    <span className='eye-span'>{hidePassword ? <img className='eye' src={eye_gray} onClick={hidePasswordToggle} alt='eye' /> : <img alt='eye' className='eye' src={eye_blue} onClick={hidePasswordToggle} />}</span>
                </div>
                <button type="submit" className='submit'>Log in</button>
            </form>
            <div className='separator-wrapper'>
                <div className="separator">OR</div>
            </div>
            <div className='button-container'>
                <button onClick={googleLink} className='google-btn'>Sign in with Google</button>
                <img onClick={googleLink} alt='Google logo' className='google-logo' src={google_logo} />
            </div>
            <div className='button-container'>
                <button onClick={appleLink} className='apple-btn'>Sign in with Apple</button>
                <img onClick={appleLink} alt='Apple logo' className='apple-logo' src={apple_logo} />
            </div>
        </div>
    )
};