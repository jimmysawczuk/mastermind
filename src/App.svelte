<script>
  import { onMount, onDestroy } from "svelte"
  import { fade } from "svelte/transition"
  import { Modals, closeModal, openModal } from "svelte-modals"

  import GuessPicker from "./GuessPicker.svelte"
  import Guess from "./Guess.svelte"
  import EmptyRow from "./EmptyRow.svelte"
  import YouWon from "./YouWon.svelte"
  import YouLost from "./YouLost.svelte"

  import { getClue, getNewAnswer, isWin } from "./utils"

  let history = []
  let answer
  let canGuess = false

  onMount(async () => {
    document.addEventListener("keyup", handleKeyUp)
    handleNewGame()
  })

  onDestroy(() => {
    document.removeEventListener("keyup", handleKeyUp)
  })

  function handleKeyUp(evt) {
    switch (evt.key) {
      case "n":
        handleNewGame()
        break
    }
  }

  function handleNewGame() {
    answer = getNewAnswer(false)
    // answer = ["red", "red", "red", "red"]
    history = []
    canGuess = true
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
      canGuess = false
      openModal(YouWon, {
        guesses: history.length,
        answer: answer,
        onConfirm: () => {
          handleNewGame()
        },
      })
    } else if (history.length >= 10) {
      canGuess = false
      openModal(YouLost, {
        guesses: history.length,
        answer,
        onConfirm: () => {
          handleNewGame()
        },
      })
    }
  }
</script>

<Modals>
  <div
    slot="backdrop"
    class="fixed inset-0 bg-slate-900/50 backdrop-blur-md z-10 transition-all"
    on:click={closeModal}
    transition:fade={{ duration: 150 }}
  />
</Modals>

<div
  class="fixed w-full px-6 h-16 left-0 top-0 right-0 grid grid-cols-[2fr,1fr] sm:grid-cols-[1fr,2fr,1fr] items-center bg-slate-100/60 dark:bg-slate-700/60 transition-colors backdrop-blur-md"
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

<div class="px-6">
  <div
    class="grid grid-cols-6 auto-rows-fr gap-1 place-items-center origin-bottom"
  >
    {#each Array(10 - history.length) as name}
      <EmptyRow />
    {/each}

    {#each history as row, i}
      <Guess num={history.length - i} guess={row.guess} clue={row.clue} />
    {/each}

    <GuessPicker on:guess={handleGuess} {canGuess} />
  </div>
</div>
