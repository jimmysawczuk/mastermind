<script>
  import Peg from "./Peg.svelte"
  import Clue from "./Clue.svelte"
  export let guess = []
  export let clue = []
  export let num = 0
</script>

<div class="font-mono text-center text-slate-500">#{num}</div>

{#each guess as peg}
  <Peg value={peg} readonly />
{/each}

<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-center">
  {#each clue as peg}
    <Clue color={peg} />
  {/each}
</div>
