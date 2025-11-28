import { Color, type Answer, type Clue } from "./types"

export const PEG_COLORS: Color[] = [
  Color.Red,
  Color.Orange,
  Color.Yellow,
  Color.Green,
  Color.Blue,
  Color.Purple,
]

export const TOGGLE_COLORS: Color[] = [
  Color.Empty,
  Color.Red,
  Color.Orange,
  Color.Yellow,
  Color.Green,
  Color.Blue,
  Color.Purple,
]

export function getClue(guess: Answer, answer: Answer): Clue {
  let white = 0
  let black = 0

  let answerUsed = Array(4).fill(false)
  let guessUsed = Array(4).fill(false)

  // console.log("New guess")
  // console.log("Guess", guess)
  // console.log("Answer", answer)

  for (let i = 0; i < guess.length; i++) {
    if (answerUsed[i] || guessUsed[i]) {
      continue
    }

    if (guess[i] == answer[i]) {
      black++
      guessUsed[i] = answerUsed[i] = true
    }
  }

  // console.log("- Black", black)
  // console.log("- Used", guessUsed, answerUsed)

  for (let i = 0; i < guess.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answerUsed[j] || guessUsed[i]) {
        continue
      }

      if (guess[i] == answer[j]) {
        white++
        guessUsed[i] = answerUsed[j] = true
        break
      }
    }
  }

  return [
    ...Array(black).fill("black"),
    ...Array(white).fill("white"),
    ...Array(4 - black - white).fill(""),
  ] as Clue
}

export function getNewAnswer(repeat = true): Answer {
  while (true) {
    let resp = []
    for (let i = 0; i < 4; i++) {
      const r = Math.floor(Math.random() * PEG_COLORS.length)
      resp[i] = PEG_COLORS[r]
    }

    if (!repeat) {
      const s = new Set(resp)
      // console.log(s, resp, s.size)
      if (s.size < 4) {
        continue
      }
    }

    // console.log("final", resp)
    return resp as Answer
  }
}

export function isWin(clue: Clue): boolean {
  if (clue.length !== 4) {
    return false
  }

  for (let i = 0; i < 4; i++) {
    if (clue[i] != "black") {
      return false
    }
  }

  return true
}

export function toggleColor(current: Color): Color{
  const selected = TOGGLE_COLORS.indexOf(current)
  return TOGGLE_COLORS[(selected + 1) % TOGGLE_COLORS.length]
}
