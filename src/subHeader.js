import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubHeader extends Component {
    render() {
        return(
            <div>
                <div className={'divider'} />
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

SubHeader.propTypes = {
    text: PropTypes.string
};

export default SubHeader;