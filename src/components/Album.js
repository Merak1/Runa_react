import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ruta}</h1>
        {this.props.artistData.map((album, index) =>
          <div className="album-display" key={album.id} >
            <p> {album.title} </p>
            <p> {album.genre}  </p>
            <img
              src={album.cover_image}
              onClick={this.props.click}
              alt="" />
          </div>
        )}
      </div>
    )
  }
}
export default Album;