import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubHeader extends Component {
    static defaultProps = {
        hasDivider: true
    };

    render() {
        const divider = <div className={'divider'} />;
        return(
            <div>
                {this.props.hasDivider && divider}
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

SubHeader.propTypes = {
    text: PropTypes.string.required,
    hasDivider: PropTypes.bool
};

export default SubHeader;