import React, { Component } from 'react';
import DisplayAlbums from './displayAlbums';

class Search extends Component {
  state = {
    input: '',
  }
  Value = (e) => {
    const value = e.target.value
    value.length === 0 ? this.setState(() => ({ input: [] })) : this.setState(({ input: value }))
    return value
  }
  render() {
    return (
      <div className="Search" >
        <div className="search-header">
          <h3>Discogs </h3>
          <h2>{this.props.input} </h2>
          <input
            onChange={this.Value} type="text" />
          <button onClick={() => { this.props.getSearchedBand(this.state.input) }}> buscar </button>
        </div>
        <div className="Sections">
          <DisplayAlbums artistData={this.props.artistData} />
        </div>
      </div >
    );
  }
}

export default Search;
