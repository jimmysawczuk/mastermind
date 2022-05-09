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

<div class="pt-16">
  <div
    class="fixed w-full px-6 h-16 left-0 top-0 right-0 grid grid-cols-[2fr,1fr] sm:grid-cols-[1fr,2fr,1fr] items-center"
  >
    <div class="hidden sm:block" />
    <h1
      class="text-left sm:text-center text-xl font-bold text-slate-800 dark:text-slate-50 transition-colors"
    >
      Mastermind
    </h1>
    <div>
      <button
        class="inline-block text-sm border border-slate-700 dark:border-slate-200 text-slate-700 dark:text-slate-200 rounded-md px-4 py-2 shadow-lg hover:text-slate-800 hover:border-slate-800 dark:hover:border-slate-50 dark:hover:text-slate-50 transition-colors"
        on:click={handleNewGame}>New Game</button
      >
    </div>
  </div>

  <div class="grid grid-cols-5 auto-rows-[1fr] gap-1 place-items-center">
    {#each Array(10 - history.length) as name}
      <EmptyRow />
    {/each}

    {#each history as row}
      <Guess guess={row.guess} clue={row.clue} />
    {/each}

    <GuessPicker on:guess={handleGuess} />
  </div>
</div>
