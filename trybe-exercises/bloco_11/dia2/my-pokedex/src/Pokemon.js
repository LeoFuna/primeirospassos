import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    return (
      <div className='pokemonContainer'>
        <h3>{this.props.name}</h3>
        <p>{this.props.type}</p>
        <p>{this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        <img src={ this.props.image } alt='logo' />
      </div>
    )
  }
}

export default Pokemon