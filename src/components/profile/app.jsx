import React, { Component } from 'react';
import Profile from './index'
import MyProps from './props'
class App extends Component{
    render() {
        return (
            console.log(this.props)
            <div id="app">
                <Profile />
                <div>
                    
                <MyProps/>
                </div>
            </div>
        )
    }
}

export default App;