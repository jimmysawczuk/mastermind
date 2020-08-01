<script>
  import PegToggle from "./PegToggle.svelte"
  import Clue from "./Clue.svelte"
  export let guess = ["", "", "", ""]
  export let clue = []

  console.log(guess, clue)
</script>

<div>
  {#each guess as peg}
  <PegToggle value="{peg}" readonly="{true}" />
  {/each}

  {#if clue}
  {#each clue as peg}
  <Clue {peg}></Clue>
  {/each}
  {/if}
</div>
