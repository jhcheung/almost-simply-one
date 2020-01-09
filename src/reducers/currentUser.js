export default (currentUser = null, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        currentUser = action.payload.usr
        return currentUser;
      default: 
        return currentUser;
    }
  }
  