import React from 'react';
import propTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className = 'pokemon-container'>
        <img src = {image} alt = {name} />
        <div className = 'info-container'>
        <span>{name}</span>
        <span>{type}</span>
        <span>{averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  averageWeight: propTypes.shape({
    value: propTypes.number.isRequired,
    measurementUnit: propTypes.string.isRequired,
  }),
  image: propTypes.string.isRequired,
}

export default Pokemon;