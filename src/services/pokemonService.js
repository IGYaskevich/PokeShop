import api from "../api/config";

class PokemonService {
  static instance = new PokemonService();
  getPokemon() {
    return api.get(`/products`);
  }

  getPokemonDetails(pokemonID) {
    return api.get(`/products/${pokemonID}`);
  }
}
export default PokemonService.instance;
