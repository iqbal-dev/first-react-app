import React, { Component } from 'react';
import './profile.style.css';

import Bio from './bio';
import Skills from './skills';
import Links from './links'
class Profile extends Component{
    render() {
        return (
            <div className="container">
                <Bio />
                <Skills />
                <Links/>
            </div>
        )
    }
}
export default Profile;