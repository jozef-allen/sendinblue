import React from 'react';
import logo from './logo.png';

const Wrapper = (props) => (
    <div className='wrapper'>
        <div className='logo-wrapper'>
            <a href="https://www.sendinblue.com/"><img src={logo} alt='sendinblue logo' className='logo' /></a>
        </div>
        <div>{props.children}</div>

    </div>
);

export default Wrapper;