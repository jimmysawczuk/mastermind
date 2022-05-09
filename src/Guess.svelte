<script>
  import Peg from "./Peg.svelte"
  import Clue from "./Clue.svelte"
  export let guess = ["red", "orange", "blue", "green"]
  export let clue = []
</script>

{#each guess as peg}
  <Peg value={peg} readonly />
{/each}

<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-center">
  {#each clue as peg}
    <Clue color={peg} />
  {/each}
</div>
