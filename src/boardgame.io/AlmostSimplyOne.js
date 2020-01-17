import wordList from '../data/wordList'
import { PlayerView } from 'boardgame.io/core';
// import { Stage } from 'boardgame.io/core';
// import { ActivePlayers } from 'boardgame.io/core';


function drawCard (G, ctx) {
  // console.log(G)
  // console.log(...G.wordList)
  // console.log(...ctx.random.Shuffle(G.wordList))
  // let newWordList = ctx.random.Shuffle([...G.wordList])
  let newWordList = [...G.wordList]
  let newWord = newWordList.pop()
  G.cardsLeft = G.cardsLeft - 1
  G.wordList = [...newWordList]
  G.word = newWord
  ctx.events.setActivePlayers({
    currentPlayer: 'waiting',
    others: 'clue'
  })
  // G.cardsLeft = G.cardsLeft - 1
  // G.wordList = ctx.random.Shuffle(G.wordList)
  // G.word = G.wordList[G.wordList.length - 1]
  // G.wordList.pop()
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
  G.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}

function guessRight(G, ctx) {
  G.points = G.points + 1
  G.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}

function passClue(G, ctx) {
  G.clues = []
  ctx.events.endTurn()
  //maybe setstage to transition screen for pts
}

function guessClue(G, ctx, guess) {
  if (guess == G.word) {
    guessRight(G, ctx)
  } else {
    guessWrong(G, ctx)
  }
}

function giveClue(G, ctx, clue) {
  G.clues.push(clue)
  if (Object.keys(ctx.activePlayers).length - 1 <= G.clues.length) {
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


const AlmostSimplyOne = {
    name: "Almost-Simply-One",
  
    setup: () => ({
      secret: {
        word: "",
        clues: [],
        wordList: [...wordList]
      },
      players: {
        '0': { points: 0 },
        '1': { points: 0 },
        '2': { points: 0 }
      },
      cardsLeft: 13,
      word: "",
      clues: [],
      points: 0,
      wordList: [...wordList],
      debug: true
    }),
    
    playerView: PlayerView.STRIP_SECRETS,

    moves: {
      switchActivePlayers
    },
    turn: {
      activePlayers: { currentPlayer: 'draw', others: 'waiting' },
      stages: {
        draw: {
          moves: {
            drawCard,
            switchActivePlayers
          },
          next: 'waiting'
        },
        waiting: {

        },
        clue: {
          moves: {
            giveClue
          },
          next: 'waiting'
        },
        guess: {
          moves: {
            passClue,
            guessClue
            // guessRight,
            // guessWrong
          }
        }
      }
    },
      
    endIf: (G) => {
        if (G.cardsLeft <= 0 ) {
            return { finalPoints: G.points };
        }
    }
  };
  
  export default AlmostSimplyOne;
  