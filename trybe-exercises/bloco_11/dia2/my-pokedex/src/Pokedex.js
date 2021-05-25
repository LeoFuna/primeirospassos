import React, { Component } from "react"
import pokemons from './data'
import Pokemon from './Pokemon'

class Pokedex extends Component {
  render() {
    return(
    <section className="pokedex">
      <h1>POKEDEX</h1>
      <section>
      {pokemons.map((pokemon, index) => <Pokemon name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} key={pokemon.id} />)}
      </section>
    </section>
    )
  }
}

export default Pokedex