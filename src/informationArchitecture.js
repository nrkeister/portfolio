import React, { Component } from 'react';
import userFlowOpen from './resources/images/user-flow-open.png';
import userFlowManage from './resources/images/user-flow-manage.png';
import similarityMatrix from './resources/images/similarity-matrix.png';

class InformationArchitecture extends Component {
    render() {
        return(
            <div>
                <p className={'description'}>
                    I created two user flows that would be important to how the user experiences the app.
                </p>
                <img src={userFlowOpen} style={{width: '40em'}}
                     alt={'Flow diagram describing opening the app'}/>
                <img src={userFlowManage} style={{width: '50em', marginTop: '5em'}}
                     alt={'Flow diagram describing managing a trip'}/>
                <div className={'divider'} />
                <p className={'description'}>
                    I performed a card sorting study on 10 potential users. The study was a hybrid open and closed sort.
                    There were 3 predefined categories 'All Trips', 'This Trip', and 'My Settings', but users could
                    add their own categories. They sorted 22 cards. The results were mostly expected, and it gave me
                    insight on which actions (cards) should be placed accessible from two locations to avoid user
                    confusion. For instance, take a look at the similarity matrix below.<br/><br/>
                    The number indicates the percentage of users who placed the two cards to the top and right of
                    the number in the same category. The higher the percentage, the more commonly the two cards were
                    placed in the same category.<br/><br/>
                    'Share Trip' and "Duplicate Trip' are both actions that affect a trip, so should probably be placed
                    in the same category, but they were only in the same category 60% of the time because users were
                    split on whether to place them in 'This Trip' or 'All Trips'. Making these options accessible
                    through both locations will help users find the actions where they most expect to see them.
                </p>
                <img src={similarityMatrix} style={{width: '40em', margin: '3em 0'}}
                     alt={'Triangular grid displaying percentages and card labels'} />
            </div>
        );
    }
}

export default InformationArchitecture;