export function toggleInGame(inGame) {
    return {
        type: 'TOGGLE_INGAME',
        payload: {
            inGame: inGame
        }
    }
}

export function loginUser(user) {
    return {
        type: 'LOGIN_USER',
        payload: user
    }
}