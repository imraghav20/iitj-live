import React from 'react';
import {
    Link
} from "react-router-dom";
import videojs from 'video.js';
import '../App.css';

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate Video.js
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            sources: [{
                src: `/hls/${this.props.match.params.id}.m3u8`,
                type: 'application/x-mpegurl'
            }],
            fluid: false
        }
        this.player = videojs(this.videoNode, videoJsOptions);
        this.player.play();
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div className="App">
                <Link to="/" className="back">
                    <i className="fa fa-home"></i>
                </Link>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video video-js"></video>
                </div>
            </div>
        )
    }
}