import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => this.setState({ copied: false }), 1500);
      }
    );
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    //gives 0 darkest 1 lightest
    const isDark = chroma(background).luminance() <= 0.07;
    const isLight = chroma(background).luminance() >= 0.7;

    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          {/* overlay to grow */}
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          {/* text to show up when copied */}
          <div className={`${copied && "show"} copy-msg`}>
            <h1>Copied</h1>
            <p className={`${isLight && "dark-text"}`}>
              {this.props.background}
            </p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark && "light-text"}>{name}</span>
            </div>
            <button className={`${isLight && "dark-text"} copy-button`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`${isLight && "dark-text"} see-more`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
