import api from "../api/config";

class PokemonService {
  static instance = new PokemonService();

  getPokemon(page) {
    return api.get(`/products?page=${page}&limit=8`);
  }

  getPokemonDetails(pokemonID) {
    return api.get(`/products/${pokemonID}`);
  }
}
export default PokemonService.instance;
