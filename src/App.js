import React, { Component } from 'react';
import './styles/App.scss';
import Research from './research';
import InformationArchitecture from './informationArchitecture';
import Design from './design';
import sketchFile from './resources/planit.sketch';

// images
import brushstroke from './resources/images/brushstroke.svg';
import tripItinFull from './resources/planitScreens/trip-itin-hifi-2.png';
import tripListFull from './resources/planitScreens/trip-list-hifi-2.png';
import tripDocuments from './resources/planitScreens/trip-documents-hifi.png';

class App extends Component {
    render() {
        const intro = () => {return(
            <p style={{marginTop: 2.5 + 'em'}}>
                Hi! I’m Nicole Keister, a UX Designer and Software Engineer.<br/>
                I would love to chat about job opportunities, so please contact me through <a
                href={'https://linkedin.com/in/nicolekeister'} target='_blank' rel='noopener noreferrer'>LinkedIn</a><br/>
                or email, if you already have my contact information.<br/><br/>
                Take a look at my most in-depth design project…
            </p>
        );};

        const planitIntro = () => {return(
            <p className={'description'}>
                I found that travelers needed a simple way to organize their information because they often have to
                make their own time-intensive documents to record trip details or store details in their emails,
                which they easily lose.<br/><br/>
                Planit is a travel planning mobile app—the solution to the chaos of organizing a complicated trip.
            </p>
        );};

        return (
            <div>
                <div className={'header'}>
                    <img src={brushstroke} className={'brushstroke'} alt='Brushstroke' />
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
                <h1>Planit</h1>
                {planitIntro()}
                <div style={{marginTop: 2 + 'em', marginBottom: 2 + 'em'}} >
                    <img src={tripListFull} style={{width: 15 + 'em', marginRight: 1 + 'em'}} alt="Full trip list"/>
                    <img src={tripItinFull} style={{width: 15 + 'em', marginRight: 1 + 'em'}} alt="Full trip itinerary"/>
                    <img src={tripDocuments} style={{width: 15 + 'em'}} alt="Trip documents"/>
                </div>
                <h1>Research</h1>
                <Research />
                <h1>Information Architecture</h1>
                <InformationArchitecture />
                <h1>Design</h1>
                <Design />
                <h1>The Final Design</h1>
                <p className={'description'}>
                    <br/><br/>
                    check out my prototype on inVision
                    <br/>
                    <a href={'https://invis.io/TXPRKQZ6HZ7#/338472500_Trip_List_-_Empty'}
                       style={{marginRight: '1em'}} target='_blank' rel='noopener noreferrer'>empty state</a>  |
                    <a href={'https://invis.io/TXPRKQZ6HZ7#/338472498_Trip_Itinerary_-_Full'}
                       style={{marginLeft: '1em'}} target='_blank' rel='noopener noreferrer'>full state</a>
                    <br/><br/>
                    or
                    <br/><br/>
                    <a href={sketchFile} download={'Nicole Keister Planit.sketch'}>
                        download my sketch file
                    </a>
                    <br/>
                    which includes even more full state designs
                </p>
            </div>
        );
    }
}

export default App;
