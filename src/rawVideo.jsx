import React, { Component } from 'react';
import propTypes from 'prop-types';
import Source from './source';

class AlewifeRawVideo extends Component {

    constructor(props) {
        super(props);
        this.renderSources = this.renderSources.bind(this);
    }

    render() {
        return (
            <video
                playsInline={this.props.playsInline}
                autoPlay={this.props.autoPlay}
                muted={this.props.muted}
                loop={this.props.loop}
                width={this.props.width}
                height={this.props.height}
                poster={this.props.poster}>
                {this.renderSources()}
            </video>
        );
    }

    renderSources() {
        if (!Boolean(this.props.src)) throw new Error("'src' is required attr for AlewifeRawVideo");
        if (this.props.src.map) {
            return this.props.src.map(renderS);
        } else {
            return renderS(this.props.src, null);
        }
        function renderS(value, index) {
            let src = "";
            let type = "";
            if (value.src) {
                src = value.src;
                type = value.type;
            } else {
                let index = value.lastIndexOf(".");
                src = value;
                type = value.substring(index + 1, value.length);
            }
            if (index == null) {
                return <Source src={src} type={type} />;
            } else {
                return <Source src={src} type={type} key={index} />;
            }
        }
    }

}

AlewifeRawVideo.propTypes = {
    width: propTypes.oneOfType([propTypes.string, propTypes.number]),
    height: propTypes.oneOfType([propTypes.string, propTypes.number]),
    src: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.string),
        propTypes.string,
        propTypes.arrayOf(
            propTypes.shape({
                src: propTypes.string.isRequired,
                type: propTypes.string.isRequired
            })),
        propTypes.shape({
            src: propTypes.string.isRequired,
            type: propTypes.string.isRequired
        })
    ]).isRequired,
    autoPlay: propTypes.bool,
    muted: propTypes.bool,
    loop: propTypes.bool,
    playsInline: propTypes.bool,
    poster: propTypes.string
}

AlewifeRawVideo.defaultProps = {
    width: "100%",
    height: "auto",
    autoPlay: true,
    muted: false,
    loop: false,
    playsInline: true
}

export default AlewifeRawVideo;
