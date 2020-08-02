<script>
  import { toggleColor } from "./utils"

  export let value = ""
  export let readonly = false

  function togglePeg() {
    if (readonly) {
      return
    }

    value = toggleColor(value)
  }
</script>

<style lang="scss">
  @use "_scss/variables" as *;

  div {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: $peg-slot;
    padding: 0;

    @media (max-width: $screen-sm-max) {
      width: 2rem;
      height: 2rem;
    }
  }

  .cantoggle {
    cursor: pointer;
  }

  .red {
    background-color: $peg-red;
  }

  .orange {
    background-color: $peg-orange;
  }

  .yellow {
    background-color: $peg-yellow;
  }

  .green {
    background-color: $peg-green;
  }

  .blue {
    background-color: $peg-blue;
  }

  .purple {
    background-color: $peg-purple;
  }
</style>

<div
  class:peg={value != ''}
  class:cantoggle={!readonly}
  class:red={value == 'red'}
  class:orange={value == 'orange'}
  class:yellow={value == 'yellow'}
  class:green={value == 'green'}
  class:blue={value == 'blue'}
  class:purple={value == 'purple'}
  on:click={togglePeg} />
