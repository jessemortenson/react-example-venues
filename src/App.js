import React, { Component } from 'react';
import Venues from './components/Venues';
import VenuesByCity from './components/VenuesByCity';
import VenueGenres from './components/VenueGenres';
import logo from './logo.svg';
import './App.css';
import CitySwitcher from './components/CitySwitcher';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: [
        {
          name: "Xcel Energy Centre",
          city: "Saint Paul",
          genres: ["Rock", "Hip-Hop", "Country"],
          size: "large"
        },
        {
          name: "First Avenue - Mainroom",
          city: "Minneapolis",
          genres: ["Rock", "Hip-Hop", "Dance"],
          size: "medium"
        },
        {
          name: "Honey",
          city: "Minneapolis",
          genres: ["Hip-Hop", "Dance"],
          size: "small"
        }
      ],
      city: "Minneapolis"
    }
  }

  handleCityChange = (city) => {
    this.setState({ city: city });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Venues! Venues! Venues!</h1>
        </header>
        <section className="main">
          <CitySwitcher venues={this.state.venues} city={this.state.city} onChange={this.handleCityChange} />
          <Venues venues={this.state.venues} />
          <VenuesByCity venues={this.state.venues} city={this.state.city} />
          <VenueGenres venues={this.state.venues} />
        </section>
      </div>
    );
  }
}

export default App;
