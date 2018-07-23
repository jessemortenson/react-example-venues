import React, { Component } from 'react';
import List from './List'

class Venues extends Component {
  render() {
    const venueNames = this.props.venues.map(venue => venue.name).sort();

    return (
      <div>
        <h2>All Venues</h2>
        <List items={venueNames} />
      </div>
    )
  }
}

export default Venues