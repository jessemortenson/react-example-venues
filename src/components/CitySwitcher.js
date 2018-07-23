import React, { Component } from 'react';

class CitySwitcher extends Component {
  render() {
    const cities = this.props.venues.map((venue) => venue.city)
      .filter((value, index, self) => { 
        return self.indexOf(value) === index;
      })
      .sort();
    
    const handler = (city) => {
      return () => {
        this.props.onChange(city);
      }
    }

    return (
      <div className="city-switcher">
        { cities.map((city) => {
          const buttonClass = (city === this.props.city) ? 'active' : '';
          return <button  
                  key={city}
                  type="button"
                  className={buttonClass}
                  onClick={handler(city)} >
                    { city }
                  </button>
        }) }
      </div>
    )
  }
}

export default CitySwitcher