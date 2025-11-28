<script lang="ts">
  import Peg from "./Peg.svelte"
  import Clue from "./Clue.svelte"

  const { answer, clue, num = 0 } = $props()
</script>

<div class="font-mono text-center text-slate-500">#{num}</div>

{#each answer as value}
  <Peg {value} readonly />
{/each}

<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-center">
  {#each clue as peg}
    <Clue color={peg} />
  {/each}
</div>
