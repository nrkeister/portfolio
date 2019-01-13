import React, { Component } from 'react';
import './styles/design.scss';
import SubHeader from './subHeader';
// trip list images
import tripListSketch1 from './resources/planitScreens/trip-list-sketch-1.jpg';
import tripListSketch2 from './resources/planitScreens/trip-list-sketch-2.jpg';
import tripListLofi1 from './resources/planitScreens/trip-list-lofi-1.png';
import tripListLofi2 from './resources/planitScreens/trip-list-lofi-2.png';
import tripListHifi1 from './resources/planitScreens/trip-list-hifi-1.png';
import tripListHifi2 from './resources/planitScreens/trip-list-hifi-2.png';
// trip itinerary images
import tripItinSketch1 from './resources/planitScreens/trip-itin-sketch-1.jpg';
import tripItinLofi from './resources/planitScreens/trip-itin-lofi.png';
import tripItinHifi1 from './resources/planitScreens/trip-itin-hifi-1.png';
import tripItinHifi2 from './resources/planitScreens/trip-itin-hifi-2.png';
// create trip images
import createTripSketch from './resources/planitScreens/create-trip-sketch.jpg';
import createTripLofi1 from './resources/planitScreens/create-trip-lofi-1.png';
import createTripLofi2 from './resources/planitScreens/create-trip-lofi-2.png';
import createTripHifi1 from './resources/planitScreens/create-trip-hifi-1.png';
import createTripHifi2 from './resources/planitScreens/create-trip-hifi-2.png';
// create item images
import createEventSketch from './resources/planitScreens/create-event-sketch.jpg';
import createEventLofi1 from './resources/planitScreens/create-event-lofi-1.png';
import createEventLofi2 from './resources/planitScreens/create-event-lofi-2.png';
import createEventLofi3 from './resources/planitScreens/create-event-lofi-3.png';
import createEventHifi1 from './resources/planitScreens/create-event-hifi-1.png';
import createEventHifi2 from './resources/planitScreens/create-event-hifi-2.png';

class Design extends Component {
    render() {
        return (
            <div>
                <p className={'description'}>
                    My design went through many iterations. I began with multiple paper sketches, then low-fidelity
                    prototypes (using inVision Freehand), high-fidelity prototypes (using Sketch), and finally a
                    high-fidelity clickable prototype (using Sketch screens on inVision). Most screens went through this
                    cycle multiple times.
                </p>
                <SubHeader text={'Trip List'} />
                <p className={'description'}>
                    The Trip List screen is where users can see all of the trips they've created.<br/><br/>
                    I struggled with whether to have global navigation on this screen. It feels like a home screen but
                    there are no global options that would apply to both this list and any other screen. I ended up
                    adding navigation for individual trips and none on screens like this one. The users had no issue
                    with this implementation and seemed to understand it intuitively.<br/>
                    I also moved from a hybrid android-iOS design to only iOS. It was confusing for users to see
                    unfamiliar patterns not native to their operating system.
                </p>
                <div className={'screenSection'}>
                    <img src={tripListSketch1} className={'screen'}
                         alt={'Sketch of trip list screen'} />
                    <img src={tripListSketch2} className={'screen'}
                         alt={'Sketch of trip list screen'}/>
                    <img src={tripListLofi1} className={'screen'}
                         alt={'Low fidelity trip list screen'}/>
                    <img src={tripListLofi2} className={'screen'}
                         alt={'Low fidelity trip list screen'}/>
                    <img src={tripListHifi1} className={'screen outline'}
                         alt={'High fidelity trip list screen'} />
                    <img src={tripListHifi2} className={'screen'}
                         alt={'High fidelity trip list screen'} />
                </div>
                <SubHeader text={'Trip Itinerary'}/>
                <p className={'description'}>
                    The Trip Itinerary screen is where users can see all the events, documents, lists, and budget items
                    for a particular trip.<br/><br/>
                    In testing, users were confused by the list of dates that they saw once they opened the itinerary
                    for the first time. I implemented a new solution of showing empty state text that would be fun and
                    instructional. As a next step, I would like to add a button in the instructions to add an event so
                    it's even easier for the user to start right away, but I would want to test whether the user
                    remembers how to add an event with + button if they haven't practiced it when making the first
                    event.
                </p>
                <div className={'screenSection'}>
                    <img src={tripItinSketch1} className={'screen'}
                         alt={'Sketch of trip itinerary screen'} />
                    <img src={tripItinLofi} className={'screen'}
                         alt={'Low fidelity trip itinerary screen'} />
                    <img src={tripItinHifi1} className={'screen outline'}
                         alt={'High fidelity trip itinerary screen'} />
                    <img src={tripItinHifi2} className={'screen'}
                         alt={'High fidelity trip itinerary screen'} />
                </div>
                <SubHeader text={'Create Trip'}/>
                <p className={'description'}>
                    The Create Trip screen is a form modal where a user inputs information to create a new trip.<br/><br/>
                    I began with a more complicated design where a user could input details about multiple locations
                    in their trip. I tried 4 different designs that didn't work well before deciding to keep it simple
                    and only include the necessary information. I thought it best that a user could input this
                    information later as they build the trip rather than have a confusing first experience.
                </p>
                <div className={'screenSection'}>
                    <img src={createTripSketch} className={'screen'}
                         alt={'Sketch of create trip screen'} />
                    <img src={createTripLofi1} className={'screen'}
                         alt={'Low fidelity create trip screen'} />
                    <img src={createTripLofi2} className={'screen'}
                         alt={'Low fidelity create trip screen'} />
                    <img src={createTripHifi1} className={'screen outline'}
                         alt={'High fidelity create trip screen'} />
                    <img src={createTripHifi2} className={'screen'}
                         alt={'High fidelity create trip screen'} />
                </div>
                <SubHeader text={'Create Event'}/>
                <p className={'description'}>
                    The Create Event screen is a form modal where a user inputs information to create a new event within
                    a trip.<br/><br/>
                    As with the Create Trip screen, I started with something much more complicated: a 3 screen flow
                    where users picked categories of events, ending in a form specific to that kind of event. The
                    example here is for a flight. I didn't like that a user would have to go through such a
                    time-consuming process to make an event, which should be a fast process. I decided to make it all
                    one form and add more specific form options hidden under 'Advanced Options'. See the full version of
                    this form in my <a href='https://invis.io/TXPRKQZ6HZ7#/338472490_Create_Event_-_Empty'
                                       target='_blank' rel='noopener noreferrer'>prototype</a>.
                </p>
                <div className={'screenSection'}>
                    <img src={createEventSketch} className={'screen'}
                         alt={'Sketch of create event screen'} />
                    <img src={createEventLofi1} className={'screen'}
                         alt={'Low fidelity create event screen'} />
                    <img src={createEventLofi2} className={'screen'}
                         alt={'Low fidelity create event screen'} />
                    <img src={createEventLofi3} className={'screen'}
                         alt={'Low fidelity create event screen'} />
                    <img src={createEventHifi1} className={'screen outline'}
                         alt={'High fidelity create event screen'} />
                    <img src={createEventHifi2} className={'screen'}
                         alt={'High fidelity create event screen'} />
                </div>
            </div>
        );
    }
}

export default Design;