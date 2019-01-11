import React, { Component } from 'react';
import './styles/research.scss';
import SubHeader from './subHeader';
import personaDana from './resources/images/persona-dana.jpg';
import personaChris from './resources/images/persona-chris.jpg';

class Research extends Component {
    render() {
        return(
            <div>
                <SubHeader text={'Interviews'} hasDivider={false} />
                <p className={'description'}>
                    I started my process by interviewing people who had travelled internationally within the past two years.
                    I chose international travel because people tend to plan that type of trip more extensively.
                    There were several key findings:
                </p>
                <ul>
                    <li>Users want the <b>fastest</b> and <b>lowest-effort</b> solution.</li>
                    <li>Users like <b>flexibility</b> in the type of information they can store. Some prefer
                        spreadsheets for this reason. One user is quoted as saying,
                        <div className={'quote'}>“I can put a ton of information in there—anything I want.”</div>
                        But they find these types of documents difficult to re-organize, format, and view on a phone.</li>
                    <li>Users rarely use planning apps because they find them <b>difficult to use</b>.</li>
                </ul>

                <SubHeader text={'Competitor Research'} />
                <p className={'description'}>
                    From there I researched my competitors and made a feature comparison chart. My main competitors were:
                </p>
                <ol>
                    <li>Email and calendar</li>
                    <li>Spreadsheets and documents</li>
                    <li>Tripit (travel planning app and website)</li>
                </ol>
                <p className={'description'}>
                    The most essential feature these all lacked was ease of use.
                </p>


                <SubHeader text={'Personas'} />
                <p className={'description'}>
                    Next, I made personas and use cases based on what my interviewees indicated they wanted from a travel
                    planning app and how they use tools to plan trips.
                </p>


                <div className={'persona-container'}>
                    <div className={'persona-col'} style={{width: '30%'}}>
                        <div className={'persona-row'}>
                            <img src={personaDana} className={'persona-photo'} alt={'Woman overlooking Amsterdam canal'}/>
                        </div>
                        <div className={'persona-row bold'}>Dana: the detailed planner</div>
                        <div className={'persona-row'}><p>Wife and mother<br/>Group-traveler</p></div>
                    </div>
                    <div className={'persona-col'} style={{textAlign: 'left', width: '50%', paddingLeft: '10%'}}>
                        <div className={'persona-row'}>
                            Behaviors
                            <ul className={'list'}>
                                <li>Wants a plan for the day</li>
                                <li>Organized</li>
                                <li>Juggles many needs in the group</li>
                            </ul>
                            Goals and Needs
                            <ul className={'list'}>
                                <li>Keeping her family in the loop</li>
                                <li>Seeing all the details in one place</li>
                                <li>Sticking to a budget</li>
                            </ul>
                            <p>
                                Use Case <br/>
                                Dana is on a trip with her husband and three kids, who all use Planit. They have tours
                                and sights on their itinerary that they can all acess on their own phones in case they get
                                lost. She also stores important documents and notes, like photos of their passports and
                                how to ask for help in an emergency.
                            </p>
                        </div>
                    </div>
                </div>


                <div className={'persona-container'}>
                    <div className={'persona-col'} style={{width: '30%'}}>
                        <div className={'persona-row'}>
                            <img src={personaChris} className={'persona-photo'} alt={'Man hiking rock formations'}/>
                        </div>
                        <div className={'persona-row bold'}>Chris: the casual planner</div>
                        <div className={'persona-row'}><p>Single<br/>Solo-traveler</p></div>
                    </div>
                    <div className={'persona-col'} style={{textAlign: 'left', width: '50%', paddingLeft: '10%'}}>
                        <div className={'persona-row'}>
                            Behaviors
                            <ul className={'list'}>
                                <li>Goes with the flow</li>
                                <li>Disorganized</li>
                                <li>Wants free time to explore</li>
                            </ul>
                            Goals and Needs
                            <ul className={'list'}>
                                <li>Traveling without scheduling getting in the way</li>
                                <li>Entering information quickly</li>
                                <li>Sharing plans with friends</li>
                            </ul>
                            Use Case <br/>
                            Chris has met up with his friend abroad. The friend gives Chris recommendations for the
                            best bars in the city, and Chris jots them down in his trip notes so he can find them later.
                            Chris shares his trip with his friend so they can see when they might cross paths again.
                            Chris hasn't planned past the next week, but his friend can look at the trip later to see
                            what Chris has added.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Research;