import React from 'react';
import pokemons from './data';


class Pokemon extends React.Component {
  render() {
    const { name } = this.props;
    const { type } = this.props;
    const { value } = this.props;
    const { measurementUnit } = this.props;
    const { image } = this.props;
    return(
      <div className="poke-card">
        <img src={ image } />
        <p>{ `Nome: ${name}` }</p>
        <p>{ `Tipo: ${type}` }</p>
        <p>{ value }{ measurementUnit }</p>
      </div>

    );
  }
}

export default Pokemon;