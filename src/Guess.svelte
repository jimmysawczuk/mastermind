<script>
  import PegToggle from "./PegToggle.svelte"
  export let guess = ["", "", "", ""]
</script>

<div>
  {#each guess as peg}
  <PegToggle value="{peg}" readonly="{true}" />
  {/each}
</div>
