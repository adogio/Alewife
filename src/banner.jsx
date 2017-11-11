import React, { Component } from 'react';


class AlewifeBanner extends Component {
    render() {
        return (
            <div style={{ margin: "auto", paddingTop: "20%" }}>
                {this.props.children}
            </div>
        );
    }
}

export default AlewifeBanner;
