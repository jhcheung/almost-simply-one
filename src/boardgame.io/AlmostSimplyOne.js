import wordList from '../data/wordList'

const AlmostSimplyOne = {
    name: "Almost-Simply-One",
  
    setup: () => ({
      cardsLeft: 13,
      word: "",
      clues: [],
      points: 0,
      wordList: [...wordList],
      debug: true
    }),
  
    moves: {
      drawCard: (G, ctx) => {
        // console.log(G)
        // console.log(...G.wordList)
        // console.log(...ctx.random.Shuffle(G.wordList))
        // let newWordList = ctx.random.Shuffle([...G.wordList])
        let newWordList = [...G.wordList]
        let newWord = newWordList.pop()
        return {
          ...G, 
          cardsLeft: G.cardsLeft - 1,
          wordList: [...newWordList],
          word: newWord
        }
        // G.cardsLeft = G.cardsLeft - 1
        // G.wordList = ctx.random.Shuffle(G.wordList)
        // G.word = G.wordList[G.wordList.length - 1]
        // G.wordList.pop()
      },
      // guessWrong(G, ctx) {
      //   if (G.cardsLeft <= 1) {
      //     G.cardsLeft = 0
      //     if (G.points === 0) {
      //       G.points = 0
      //     } else {
      //       G.points -= 1
      //     }
      //   } else {
      //     G.cardsLeft -= 2
      //   }
      // },
      // guessRight(G, ctx) {
      //   G.cardsLeft -= 1
      //   G.points += 1
      // },
      // passClue(G, ctx, id) {
      //   G.cardsLeft -= 1
      // },
      // addClue(G, ctx, clue) {
      //   G.clues.push(clue)
      // }
    },
    
    endIf: (G) => {
        if (G.cardsLeft <= 0 ) {
          debugger
            return { finalPoints: G.points };
        }
    }
  };
  
  export default AlmostSimplyOne;
  