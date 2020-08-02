<script>
  import GuessPicker from "./GuessPicker.svelte"
  import Guess from "./Guess.svelte"
  import Clue from "./Clue.svelte"
  import EmptyRow from "./EmptyRow.svelte"

  import { getClue, getNewAnswer, isWin } from "./utils"
  import { onMount } from "svelte"

  let history = []
  let answer

  onMount(async () => {
    handleNewGame()
  })

  function handleNewGame() {
    answer = getNewAnswer(false)
    history = []
  }

  function handleGuess(evt) {
    const guess = evt.detail.guess
    const clue = getClue(guess, answer)

    history = [
      {
        guess,
        clue,
      },
      ...history,
    ]

    if (isWin(clue)) {
      alert("You won!")
      handleNewGame()
    }

    if (history.length >= 10) {
      alert("You lose! The answer was: " + answer.join(", "))
      handleNewGame()
    }
  }
</script>

<style lang="scss">
  @use "_scss/variables" as *;

  :global(html) {
    box-sizing: border-box;
    font-size: 16px;
  }

  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }

  // :global(:root) {
  //   --success-btn: $success-btn;
  //   --new-game-btn: #63b3ed;

  //   --peg-red: #c53030;
  //   --peg-orange: #ed8936;
  //   --peg-yellow: #f6e05e;
  //   --peg-green: #48bb78;
  //   --peg-blue: #3182ce;
  //   --peg-purple: $peg-purple;

  //   --peg-black: #1a202c;
  //   --peg-white: #f7fafc;
  //   --peg-slot: #e2e8f0;
  // }

  :global(body) {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  .board {
    position: relative;
  }

  .controls {
    position: absolute;
    right: 100%;
  }

  .new-game-btn {
    cursor: pointer;
    display: inline-block;
    background: $new-game-btn;
    border: 1px solid $new-game-btn;
    border-radius: 4px;
    padding: 5px 15px;
    color: #fff;
    width: 100%;
  }
</style>

<div class="board">
  <div class="controls">
    <button class="new-game-btn" on:click={handleNewGame}>New Game</button>
  </div>

  {#each Array(10 - history.length) as name}
    <EmptyRow />
  {/each}

  {#each history as row}
    <Guess guess={row.guess} clue={row.clue} />
  {/each}

  <GuessPicker on:guess={handleGuess} />
</div>
