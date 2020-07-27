<script>
  import GuessPicker from "./GuessPicker.svelte"
  import Guess from "./Guess.svelte"

  let guesses = []

  function handleGuess(evt) {
    guesses = [evt.detail.guess, ...guesses]
  }
</script>

{#each guesses as guess}
<Guess {guess} />
{/each}

<GuessPicker on:guess="{handleGuess}" />
