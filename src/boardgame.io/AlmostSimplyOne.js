import wordList from '../data/wordList'
import { PlayerView } from 'boardgame.io/core';
// import { Stage } from 'boardgame.io/core';
// import { ActivePlayers } from 'boardgame.io/core';


function drawCard (G, ctx) {
  // console.log(G)
  // console.log(...G.wordList)
  // console.log(...ctx.random.Shuffle(G.wordList))
  let newWordList = ctx.random.Shuffle([...G.secret.wordList])
//   let newWordList = [...G.secret.wordList]
  let newWord = newWordList.pop()
  G.cardsLeft = G.cardsLeft - 1
  G.secret.wordList = [...newWordList]
  G.secret.word = newWord
  console.log(G.secret.word)
  ctx.events.setActivePlayers({
    currentPlayer: 'waiting',
    others: 'clue'
  })
  // G.cardsLeft = G.cardsLeft - 1
  // G.wordList = ctx.random.Shuffle(G.wordList)
  // G.word = G.wordList[G.wordList.length - 1]
  // G.wordList.pop()
}
function guessRight(G, ctx) {
  G.points = G.points + 1
  G.players[ctx.currentPlayer] = G.players[ctx.currentPlayer] + 1
  G.secret.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}


function guessWrong(G, ctx) {
  if (G.cardsLeft <= 0) {
    G.cardsLeft = 0
    if (G.points === 0) {
      G.points = 0
    } else {
      G.points -= 1
    }
  } else {
    G.cardsLeft -= 1
  }
  G.secret.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}


function passClue(G, ctx) {
  G.secret.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}

function eliminateClue(G, ctx, removeClue) {
	G.secret.clues = G.secret.clues.filter(clue => clue !== removeClue)
}

function revealClues(G, ctx, playerID) {
	G.players[playerID].clues = G.secret.clues
}
  

function revealWord(G, ctx, playerID) {
	G.players[playerID].word = G.secret.word
}


function guessClue(G, ctx, guess) {
  if (guess.toLowerCase() === G.secret.word.toLowerCase()) {
    guessRight(G, ctx)
  } else {
    guessWrong(G, ctx)
  }
}

function giveClue(G, ctx, clue) {
  G.secret.clues.push(clue)
  if (Object.keys(ctx.activePlayers).length - 1 <= G.secret.clues.length) {
    console.log("before", ctx.activePlayers)
    ctx.events.setActivePlayers({
      currentPlayer: 'guess',
      others: 'waiting'
    })
    console.log("after", ctx.activePlayers)

  } else {
    ctx.events.setStage('waiting') 
  }
  console.log("after alllll", ctx.activePlayers)
}

function switchActivePlayers(G, ctx) {
  console.log("before", ctx.activePlayers)
    ctx.events.setActivePlayers({
      currentPlayer: 'waiting',
      others: 'guess'
    })
  console.log("after", ctx.activePlayers)
}

// const stripSecrets = (G, ctx, playerID) => {
// 	if (ctx.activePlayers && ctx.activePlayers[playerID] === 'waiting') {
// 		return ({
// 			players: {
// 				[playerID]: G.players[playerID]
// 			},
// 			cardsLeft: G.cardsLeft,
// 			points: G.points,
// 		}) 
// 	} else if (ctx.activePlayers && ctx.activePlayers[playerID] === 'clue') {
// 		return({
// 			players: {
// 				[playerID]: G.players[playerID]
// 			},
// 			word: "",
// 			clues: [],
// 			cardsLeft: G.cardsLeft,
// 			points: G.points
// 		})
// 	}
// }

const AlmostSimplyOne = {
    name: "Almost-Simply-One",
  
    setup: () => ({
		secret: {
			word: "",
			wordList: [...wordList],
			clues: []
		},
		players: {
			'0': { points: 0, clues: [], word: "" },
			'1': { points: 0, clues: [], word: "" },
			'2': { points: 0, clues: [], word: ""  },
			'3': { points: 0, clues: [], word: ""  },
			'4': { points: 0, clues: [], word: ""  },
			'5': { points: 0, clues: [], word: ""  },
			'6': { points: 0, clues: [], word: ""  },
		},
		cardsLeft: 3,
		points: 0,
		clues: [],
		// word: "",
		// wordList: [...wordList],
		// debug: true
    }),
    
    // playerView: (G, ctx, playerID) => {
	// 	return stripSecrets(G, ctx, playerID)
	// },
	playerView: PlayerView.STRIP_SECRETS,

    moves: {
      switchActivePlayers //test
    },
    turn: {
      activePlayers: { currentPlayer: 'draw', others: 'waiting' },
      stages: {
        draw: {
          moves: {
            drawCard: {
				move: drawCard,
				optimistic: false
			},
            switchActivePlayers
          },
          next: 'waiting'
        },
        waiting: {

        },
        clue: {
          moves: {
            giveClue: {
				move: giveClue,
				optimistic: false
			},
			revealWord: {
				move: revealWord,
				optimistic: false
			}
          },
          next: 'waiting'
        },
        guess: {
          moves: {
			revealClues: {
				move: revealClues,
				optimistic: false
			},
            passClue: {
				move: passClue,
				optimistic: false
			},
            guessClue: {
				move: guessClue,
				optimistic: false
			}
            // guessRight,
            // guessWrong
          }
        }
      }
    },
      
    endIf: (G) => {
        if (G.cardsLeft <= 0 ) {
			return { 
				finalPoints: G.points,
				players: G.players
			};
        }
    }
  };
  
  export default AlmostSimplyOne;
  