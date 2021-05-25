import React from 'react';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
  render() {
    const pokeList = this.props.pokeList;
    return <div>
        {pokeList.map((item) => 
        <Pokemon pokemon = {item} />
        )}
    </div>
  }
}

export default Pokedex;