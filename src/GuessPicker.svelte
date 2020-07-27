<script>
  import PegToggle from "./PegToggle.svelte"
  import { createEventDispatcher } from "svelte"

  let dispatch = createEventDispatcher()
  let guess = initialGuess()

  function initialGuess() {
    return ["", "", "", ""]
  }

  function handleSubmit() {
    dispatch("guess", { guess: guess })
    guess = []
    guess = initialGuess()
  }
</script>

<div>
  {#each guess as peg}
  <PegToggle bind:value="{peg}" />
  {/each}

  <button on:click="{handleSubmit}">Submit</button>
</div>
