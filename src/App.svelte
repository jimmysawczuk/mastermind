<script>
  import GuessPicker from "./GuessPicker.svelte";
  import Guess from "./Guess.svelte";

  let guesses = [];

  function handleGuess(evt) {
    guesses = [evt.detail.guess, ...guesses];
  }
</script>

{#each guesses as guess}
  <div>
    <Guess {guess} />
  </div>
{/each}

<GuessPicker on:guess={handleGuess} />
