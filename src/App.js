import React, { Component } from 'react';
import './styles/App.scss';
import brushstroke from './resources/images/brushstroke.svg';
import tripItinFull from './resources/planitScreens/planit-trip-itin-full.png';
import tripListFull from './resources/planitScreens/planit-trip-list-full.png';
import tripDocuments from './resources/planitScreens/planit-trip-documents-full.png';

class App extends Component {
    render() {
        const intro = () => {return(
            <p style={{marginTop: 2.5 + 'em'}}>
                Hi! I’m Nicole Keister, a UX Designer and Software Engineer.<br/>
                I would love to chat about job opportunities, so please contact me through <a
                href={'https://linkedin.com/in/nicolekeister'} target='_blank' rel='noopener noreferrer'>LinkedIn</a>.<br/>
                Take a look at my most in-depth design project…
            </p>
        );};
        const planitIntro1 = 'I found that travelers needed a simple way to organize their information because they ' +
            'often have to make their own time-intensive documents to record trip details or store details in their ' +
            'emails, which they easily lose.';
        const planitIntro2 = 'Planit is a travel planning mobile app—the solution to the chaos of organizing a ' +
            'complicated trip.';

        return (
            <div>
                <div className={'header'}>
                    <img src={brushstroke} className={'brushstroke'} alt="brushstroke" />
                    <header className={'title'}>Nicole Keister</header>
                </div>
                <div className={'contact'}>
                    <div>
                        <a href={'https://linkedin.com/in/nicolekeister'}
                           target='_blank' rel='noopener noreferrer'>linkedin</a>
                    </div>
                    <div style={{marginTop: 1 + 'em'}}>
                        <a href={'https://github.com/nrkeister/portfolio'}
                           target='_blank' rel='noopener noreferrer'>github</a>
                    </div>
                </div>
                {intro()}
                <div className={'project-title'}>planit</div>
                <p className={'description'}>{planitIntro1}<br/><br/>{planitIntro2}</p>
                <div style={{marginTop: 2 + 'em', marginBottom: 2 + 'em'}} >
                    <img src={tripListFull} style={{width: 15 + 'em', marginRight: 1 + 'em'}} alt="Full trip list"/>
                    <img src={tripItinFull} style={{width: 15 + 'em', marginRight: 1 + 'em'}} alt="Full trip itinerary"/>
                    <img src={tripDocuments} style={{width: 15 + 'em'}} alt="Trip documents"/>
                </div>
            </div>
        );
    }
}

export default App;
