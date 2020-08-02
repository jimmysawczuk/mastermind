<script>
  import Peg from "./Peg.svelte"
  import Clue from "./Clue.svelte"
  export let guess = ["", "", "", ""]
  export let clue = []

  // console.log(guess, clue)
</script>

<style lang="scss">
  @use "_scss/variables" as *;

  .row {
    display: grid;
    grid-template-columns: 4 * 3rem 3rem;
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: 4 * 2.5rem 2.5rem;
      grid-template-rows: 2.5rem;
    }
  }

  .pegs {
    display: grid;
    grid-template-columns: repeat(4, 3rem);
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: repeat(4, 2.5rem);
      grid-template-rows: 2.5rem;
    }
  }

  .clue {
    display: grid;
    grid-template-columns: repeat(2, 1rem);
    grid-template-rows: repeat(2, 1rem);
    justify-items: center;
    align-items: center;
  }
</style>

<div class="row">
  <div class="pegs">
    {#each guess as peg}
      <Peg value={peg} readonly />
    {/each}
  </div>

  <div class="clue">
    {#each clue as peg}
      <Clue color={peg} />
    {/each}
  </div>
</div>
