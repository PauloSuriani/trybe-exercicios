import React from 'react';
import pokemons from './data';


class Pokemon extends React.Component {
  render() {
    const { name } = this.props;
    const { type } = pokemons;
    const { value } = pokemons.averageWeight;
    const { measurementUnit } = pokemons.averageWeight;
    const { image } = pokemons;
    return(
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ value }</p>
        <p>{ measurementUnit }</p>
        <p>{ image }</p>
      </div>

    );
  }
}

export default Pokemon;