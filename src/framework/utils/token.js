module.exports = {

  save(token) {
    delete sessionStorage.token;
    sessionStorage.token = token;
  },

  remove() {
    delete sessionStorage.token;
  },

  get() {
    return sessionStorage.token;
  },

  loggedIn() {
    return !!sessionStorage.token
  }

}
