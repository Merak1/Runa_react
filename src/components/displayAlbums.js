import React, { Component } from 'react';
import Image from './Image';
import Modal from './Modal';

class DisplayAlbums extends Component {
  state = {
    display: false,
    info: {
      index: 0,
      title: "",
      src: "",
      genre: [],
      label: [],
      style: []
    }
  }

  showModal = (
    index,
    src,
    title,
    genre,
    label,
    style
  ) => {
    this.setState({ display: true });
    this.setState({
      info: {
        src: src,
        title: title,
        genre: genre,
        label: label,
        style: style
      }
    })
    console.log("index", index)
  }
  closeModal = () => {
    this.setState({ display: false });
  }

  render() {
    return (
      <div className="albums">
        {this.props.artistData.map((album, index) =>
          <div className="album-display"
            key={album.id} >
            <Modal
              info={this.state.info}
              display={this.state.display}
              closeModal={this.closeModal}
            />
            <Image
              index={index}
              title={album.title}
              source={album.cover_image}
              genre={album.genre}
              label={album.label}
              style={album.style}
              send={this.showModal}
              class={"album-display"}
            />
            <h3> {album.title} </h3>
            <p> {this.index} </p>
            <p> {album.genre}  </p>
            <p> {album.year}  </p>
          </div>

        )}

        {/* <Album
          click={this.showModal}
          ruta={"album desde displayAlbum"}
          artistData={this.props.artistData}
        /> */}

      </div>
    );
  }
}
export default DisplayAlbums;