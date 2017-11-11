import React, { Component } from 'react';
import propTypes from 'prop-types';

class AlewifeSource extends Component {

    constructor(props) {
        super(props);
        this.typeFiller = this.typeFiller.bind(this);
    }

    render() {
        return (
            <source src={this.props.src} type={this.typeFiller()} />
        );
    }

    typeFiller() {
        if (this.props.type.indexOf("video") !== -1) {
            return this.props.type;
        } else {
            return "video/" + this.props.type;
        }
    }

}

AlewifeSource.propTypes = {
    src: propTypes.string.isRequired,
    type: propTypes.string.isRequired
}

export default AlewifeSource;
