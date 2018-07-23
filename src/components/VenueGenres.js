import React, { Component } from 'react';
import List from './List'

class VenueGenres extends Component {
  render() {
    const genres = this.props.venues.reduce((genres, venue) => {
        return genres.concat(venue.genres);
      }, [])
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
  
    return (
      <div>
        <h2>Genres</h2>
        <List items={genres} />
      </div>
    )
  }
}

export default VenueGenres