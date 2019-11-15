import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';



class Home extends Component {
  state = {
    input: '',
    artistData: [],
  }
  componentDidMount() {
    this.getAllBands()
  }
  componentDidUpdate() {
    console.log("artistData from update", this.state.artistData)
    console.log("resource_url from update", this.state.artistData.resource_url)
  }

  getAllBands = async () => {
    // const res = await axios.get(`https://api.discogs.com/database/search?&token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh`);
    const res = await axios.get(`https://api.discogs.com/database/search?artist=306&token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh`);
    console.log("res, first data", res)
    const { results, pagination } = await res.data
    this.setState({ artistData: results })
  }
  getSearchedBand = async (artist) => {
    const res = await axios.get(`https://api.discogs.com/database/search?artist=${artist}&token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh`);
    console.log("res", res)
    console.log("artist", artist)
    const { results, pagination } = await res.data
    console.log("Searched band ", results)
    this.setState({ artistData: results })
    return results
  }
  getRandom() {
    const number = Math.floor(Math.random() * 1001);
    console.log(number)
    return number
  }

  render() {
    return (
      <div className="Home">
        <Search
          input={this.state.input}
          artistData={this.state.artistData}
          getSearchedBand={this.getSearchedBand}
          getRandomBand={this.getRandomBand}
        />
      </div>
    );
  }
}






export default Home;