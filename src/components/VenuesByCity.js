import React, { Component } from 'react';
import List from './List'

class VenuesByCity extends Component {
  render() {
    const venueNames = this.props.venues.filter(venue => venue.city === this.props.city)
      .map(venue => venue.name)
      .sort();
    return (
      <div>
        <h2>All Venues in {this.props.city}</h2>
        <List items={venueNames} />
      </div>
    )
  }
}

export default VenuesByCity