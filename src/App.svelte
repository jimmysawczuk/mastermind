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
    answer = getNewAnswer()
    history = []
  }

  function handleGuess(evt) {
    const guess = evt.detail.guess
    const clue = getClue(guess, answer)

    if (isWin(clue)) {
      alert("You won!")
      handleNewGame()
      return
    }

    history = [
      {
        guess,
        clue,
      },
      ...history,
    ]
  }
</script>

<style>
  @import "../node_modules/normalize.css/normalize.css";

  :global(html) {
    box-sizing: border-box;
  }
  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }

  :global(:root) {
    --success-btn: #68d391;
    --new-game-btn: #63b3ed;
  }

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
    left: -50%;
  }

  .controls button {
    display: block;
  }

  .new-game-btn {
    background: var(--new-game-btn);
    border: 1px solid var(--new-game-btn);
    border-radius: 4px;
    padding: 5px 15px;
    color: #fff;
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
