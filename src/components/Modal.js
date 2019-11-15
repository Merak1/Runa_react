import React, { Component } from 'react';
import Image from './Image';

class Modal extends Component {

  render() {

    return (

      <div className={
        this.props.display === true ? 'modal display-block' : 'modal display-none'
      } >
        <section className='modal-main'>
          <div className='modal-container'>
            <button className='modal-button close' onClick={() => { this.props.closeModal() }}>  X </button>
            <h2> {this.props.info.src} </h2>
            <p> {this.props.info.genre} </p>
            <p> {this.props.info.label} </p>
            <p> {this.props.info.style} </p>
            <Image
              source={this.props.info.title}
              class={"album-display unclick"}
            />
          </div>
        </section>
      </div >
    )
  }
}
export default Modal;
