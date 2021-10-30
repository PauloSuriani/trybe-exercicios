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
      <div>
        <img src={ image } />
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ value }</p>
        <p>{ measurementUnit }</p>
        
      </div>

    );
  }
}

export default Pokemon;