import { pokemonAPI } from "../api/config";

class AuthService {
  static instance = new AuthService();
  signUp(singData) {
    return pokemonAPI.singUp(singData);
  }
  signIn({ email, password }) {
    const authData = { email, password };
    return pokemonAPI.singIn(authData);
  }
}

export default AuthService.instance;
