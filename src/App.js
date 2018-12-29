import React, { Component } from 'react';
import './styles/App.scss';
import brushstroke from './resources/images/brushstroke.svg';



class App extends Component {
    render() {
        const inText = <span className={'italic'} style={{margin: 1 + 'em'}}>in</span>;
        return (
            <div>
                <div className={'header'}>
                    <img src={brushstroke} className={'brushstroke'} alt="brushstroke" />
                    <header className={'title'}>Nicole Keister</header>
                </div>
                <div style={{marginTop: 2 + 'em'}}><a href={'https://linkedin.com/in/nicolekeister'}>linkedin</a></div>
                <div style={{marginTop: 1 + 'em'}}><a href={'https://github.com/nrkeister/portfolio'}>github</a></div>
            </div>
        );
    }
}

export default App;
