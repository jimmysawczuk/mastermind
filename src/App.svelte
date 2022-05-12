<script>
  import GuessPicker from "./GuessPicker.svelte"
  import Guess from "./Guess.svelte"
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

<div class="pt-4">
  <div
    class="fixed w-full px-6 h-16 left-0 top-0 right-0 grid grid-cols-[2fr,1fr] sm:grid-cols-[1fr,2fr,1fr] items-center bg-slate-100/80 dark:bg-slate-700/80 blur-md"
  >
    <div class="hidden sm:block" />
    <h1
      class="text-left sm:text-center text-lg font-bold text-slate-800 dark:text-slate-50 transition-colors"
    >
      Mastermind
    </h1>
    <div class="text-right">
      <button
        class="inline-block cursor-pointer text-sm border border-slate-700 dark:border-slate-200 text-slate-700 dark:text-slate-200 rounded-md px-2 py-1 shadow-lg hover:bg-slate-200 hover:dark:bg-slate-600 transition-colors"
        on:click={handleNewGame}>New Game</button
      >
    </div>
  </div>

  <div class="grid grid-cols-6 auto-rows-[1fr] gap-1 place-items-center">
    {#each Array(10 - history.length) as name}
      <EmptyRow />
    {/each}

    {#each history as row, i}
      <Guess num={history.length - i} guess={row.guess} clue={row.clue} />
    {/each}
  </div>

  <div class="grid grid-cols-5 auto-rows-[1fr] gap-1 place-items-center mt-4">
    <GuessPicker on:guess={handleGuess} />
  </div>
</div>
