<script>
  import GuessPicker from "./GuessPicker.svelte"
  import Guess from "./Guess.svelte"

  let history = []
  let answer

  function newGame() {
    answer = ["orange", "orange", "orange", "orange"]
  }

  function getClue(guess, answer) {
    let clue = ["","","",""]
    return clue
  }

  function handleGuess(evt) {
    const guess = evt.detail.guess

    const clue = getClue(guess, answer)

    history = [{
      guess,
      clue,
    }, ...history]
  }
</script>

{#each history as row}
  <Guess guess={row.guess} clue={row.clue} />
{/each}

<GuessPicker on:guess={handleGuess} />
