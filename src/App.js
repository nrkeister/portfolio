import React, { Component } from 'react';
import './styles/App.scss';
import Research from './research';
import InformationArchitecture from './informationArchitecture';
import Design from './design';
import planitLogo from './resources/images/planit-logo.png';
import sketchFile from './resources/planit.sketch';
import resume from './resources/Nicole Keister Resume.pdf'

// images
import brushstroke from './resources/images/brushstroke.png';
import tripItinFull from './resources/planitScreens/trip-itin-hifi-2.png';
import tripListFull from './resources/planitScreens/trip-list-hifi-2.png';
import tripDocuments from './resources/planitScreens/trip-documents-hifi.png';

class App extends Component {
    render() {
        const intro = () => {return(
            <p className={'center'} style={{marginTop: '2.5em'}}>
                Hi! I’m Nicole Keister, a UX Designer and Software Engineer.<br/><br/>
                I would love to chat about job opportunities, so please contact me!<br/>
                <a href={'https://linkedin.com/in/nicolekeister'} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <span className={'inlineDivider'}>|</span>
                NicoleRKeister@gmail.com
                <span className={'inlineDivider'}>|</span>
                <a href={resume} download={'Nicole Keister Resume.pdf'}>Resume Download</a><br/><br/>
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
                </div>
                <div className={'contact'}>
                    <div>
                        <a href={'https://linkedin.com/in/nicolekeister'}
                           target='_blank' rel='noopener noreferrer'>linkedin</a>
                    </div>
                    <div style={{marginTop: '1em'}}>
                        <a href={'https://invis.io/TXPRKQZ6HZ7#/338472500_Trip_List_-_Empty'}
                           target='_blank' rel='noopener noreferrer'>invision</a>
                    </div>
                    <div style={{marginTop: '1em'}}>
                        <a href={'https://github.com/nrkeister/portfolio'}
                           target='_blank' rel='noopener noreferrer'>github</a>
                    </div>
                </div>
                {intro()}
                <div  className={'planitLogo'}><img src={planitLogo} style={{width: '100%'}} alt="Planit Logo with spaceship"/></div>
                {planitIntro()}
                <div className={'planitScreenContainer'}>
                    <img src={tripListFull} className={'planitScreen'} alt="Full trip list"/>
                    <img src={tripItinFull} className={'planitScreen'} alt="Full trip itinerary"/>
                    <img src={tripDocuments} className={'planitScreen'} alt="Trip documents"/>
                </div>
                <h1>Research</h1>
                <Research />
                <h1>Information Architecture</h1>
                <InformationArchitecture />
                <h1>Design</h1>
                <Design />
                <h1 style={{marginTop: '2em'}}>The Final Design</h1>
                <p className={'description center'}>
                    <br/><br/>
                    check out my prototype on inVision<br/>
                    <a href={'https://invis.io/TXPRKQZ6HZ7#/338472500_Trip_List_-_Empty'}
                       target='_blank' rel='noopener noreferrer'>empty state</a>
                    <span className={'inlineDivider'}>|</span>
                    <a href={'https://invis.io/TXPRKQZ6HZ7#/338472498_Trip_Itinerary_-_Full'}
                       target='_blank' rel='noopener noreferrer'>full state</a>
                    <br/><br/>
                    or
                    <br/><br/>
                    <a href={sketchFile} download={'Nicole Keister Planit.sketch'}>download my sketch file</a><br/>
                    which includes even more full state designs
                </p>
                <div className={'divider'}/>
                <p className={'description center'}>
                    Thanks for reading! If you liked what you saw or would like to know more, please contact me!<br/><a
                    href={'https://linkedin.com/in/nicolekeister'} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <span className={'inlineDivider'}>|</span>
                    NicoleRKeister@gmail.com
                    <span className={'inlineDivider'}>|</span>
                    <a href={resume} download={'Nicole Keister Resume.pdf'}>Resume Download</a>
                </p>
            </div>
        );
    }
}

export default App;
