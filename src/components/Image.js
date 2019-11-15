import React, { Component } from 'react';
class Image extends Component {
  render() {
    return (
      <img
        src={this.props.source}
        className={this.props.class}
        onClick={() => {
          this.props.send(
            this.props.index,
            this.props.title,
            this.props.source,
            this.props.genre,
            this.props.label,
            this.props.style
          )
        }}
        alt={this.props.title} />
    )
  }
}
export default Image;
