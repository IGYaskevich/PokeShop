import { pokemonAPI } from "../api/config";

class PokemonService {
  static instance = new PokemonService();
  getPokemon() {
    return pokemonAPI.getPokemons();
  }

  getPokemonDetails(pokemonID) {
    return pokemonAPI.getPokemonDetails(pokemonID);
  }
}
export default PokemonService.instance;
