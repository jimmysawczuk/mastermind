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

  $: submittable = guess.filter((s) => s == "").length == 0
</script>

<style>
  div {
    display: flex;
  }

  button {
    display: inline-block;
    vertical-align: middle;
  }
</style>

<div>
  {#each guess as peg}
  <PegToggle bind:value="{peg}" />
  {/each}

  <button on:click="{handleSubmit}" disabled="{!submittable}">Submit</button>
</div>
