import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        { this.props.items.map((item, i) => <li key={i}> { item } </li>)}
      </ul>
    )
  }
}

export default List