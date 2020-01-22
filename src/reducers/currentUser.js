export default (currentUser = { name: "", inGame: false }, action) => {
    let loggedInUser;
    switch (action.type) {
      case 'LOGIN_USER':
        loggedInUser = {...currentUser, name: action.payload.name}
        return loggedInUser;
      case 'TOGGLE_INGAME':
        loggedInUser = {...currentUser, inGame: action.payload.inGame}
        return loggedInUser;
      case 'LOGOUT_USER':
        loggedInUser = { name: "", inGame: false }
        return loggedInUser
      default: 
        return currentUser;
    }
  }
  