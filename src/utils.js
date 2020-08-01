export const DEFAULT_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
]

export function getClue(guess, answer) {
  let white = 0
  let black = 0

  let answerUsed = Array(4).fill(false)
  let guessUsed = Array(4).fill(false)

  console.log("New guess")
  console.log("Guess", guess)
  console.log("Answer", answer)

  for (let i = 0; i < guess.length; i++) {
    if (answerUsed[i] || guessUsed[i]) {
      continue
    }

    if (guess[i] == answer[i]) {
      black++
      guessUsed[i] = answerUsed[i] = true
    }
  }

  console.log("- Black", black)
  console.log("- Used", guessUsed, answerUsed)

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

  let resp = Array(4)

  for (let i = 0; i < black; i++) {
    resp[i] = "black"
  }

  for (let i = black; i < black + white; i++) {
    resp[i] = "white"
  }

  for (let i = black + white; i < resp.length; i++) {
    resp[i] = ""
  }

  return resp
}

export function getNewAnswer(repeat = true) {
  let resp = []
  for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * DEFAULT_COLORS.length)
    resp[i] = DEFAULT_COLORS[r]
  }
  return resp
}

export function isWin(clue) {
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

const toggleColors = ["", ...DEFAULT_COLORS]

export function toggleColor(current) {
  const selected = toggleColors.indexOf(current)
  return toggleColors[(selected + 1) % toggleColors.length]
}
