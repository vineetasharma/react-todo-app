import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <input name={'id'} placeholder={"TaskId"}/>
                <input name={'task'} placeholder={"Task"}/>

            </div>
        );
    }
}

export default App;
