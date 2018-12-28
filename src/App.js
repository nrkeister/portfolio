import React, { Component } from 'react';
import './styles/App.scss';

class App extends Component {
    render() {
        const inText = <span className={'italic'} style={{margin: 1 + 'em'}}>in</span>;
        return (
            <div>
                <header className={'title'}>nicole keister</header>
                <p>UX DESIGNER {inText} NEW YORK</p>
            </div>
        );
    }
}

export default App;
