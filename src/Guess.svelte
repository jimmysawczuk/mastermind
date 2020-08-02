<script>
  import Peg from "./Peg.svelte"
  import Clue from "./Clue.svelte"
  export let guess = ["", "", "", ""]
  export let clue = []

  // console.log(guess, clue)
</script>

<style>
  .row {
    display: grid;
    grid-template-columns: 200px 40px;
    grid-template-rows: 50px;
    justify-items: center;
    align-items: center;
  }

  .pegs {
    display: grid;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px;
    justify-items: center;
    align-items: center;
  }

  .clue {
    display: grid;
    grid-template-columns: 20px 20px;
    grid-template-rows: 20px 20px;
    justify-items: center;
    align-items: center;
  }

  .clue :global(.peg) {
    flex: 0 0 50%;
  }
</style>

<div class="row">
  <div class="pegs">
    {#each guess as peg}
      <Peg value={peg} readonly />
    {/each}
  </div>

  {#if clue}
    <div class="clue">
      {#each clue as peg}
        <Clue color={peg} />
      {/each}
    </div>
  {/if}
</div>
