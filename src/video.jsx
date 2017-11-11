import React, { Component } from 'react';
import propTypes from 'prop-types';
import RawVideo from './rawVideo';

class AlewifeVideo extends Component {

    render() {
        return (
            <div style={{ position: "relative", height: "100%" }}>
                <RawVideo
                    playsInline={this.props.playsInline}
                    autoPlay={this.props.autoPlay}
                    muted={this.props.muted}
                    loop={this.props.loop}
                    src={this.props.src}
                    width={this.props.width}
                    height={this.props.height}
                    poster={this.props.poster}
                />
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "0px",
                    top: "0px"
                }}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}

AlewifeVideo.propTypes = {
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

AlewifeVideo.defaultProps = {
    width: "100%",
    height: "auto",
    autoPlay: true,
    muted: false,
    loop: false,
    playsInline: true
}

export default AlewifeVideo;
