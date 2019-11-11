import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className='ColorBox'>
          {/* overlay to grow */}
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          {/* text to show up when copied */}
          <div className={`${copied && "show"} copy-msg`}>
            <h1>Copied</h1>
            <p>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
