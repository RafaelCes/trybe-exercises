import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'


class Pokedex extends React.Component {
  render() {
    const pokeList = this.props.pokeList;
    return <div className = 'pokedex-container'>
        {pokeList.map((item) => 
        <Pokemon pokemon = {item} />
        )}
    </div>
  }
}

export default Pokedex;