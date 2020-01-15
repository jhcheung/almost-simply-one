export default (currentUser = { name: "", inGame: false }, action) => {
    let loggedInUser;
    switch (action.type) {
      case 'LOGIN_USER':
        loggedInUser = {...currentUser, name: action.payload.name}
        return loggedInUser;
      case 'TOGGLE_INGAME':
        loggedInUser = {...currentUser, inGame: action.payload.inGame}
        return loggedInUser;
      default: 
        return currentUser;
    }
  }
  