import api from "../api/config";

class AuthService {
  static instance = new AuthService();
  signUp(singData) {
    return api.post("auth/signup", singData);
  }
  signIn({ email, password }) {
    const authData = { email, password };
    return api.post("/auth/signIn", authData);
  }
  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}

export default AuthService.instance;
