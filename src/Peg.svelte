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

<style>
  div {
    display: block;
    width: 4px;
    height: 4px;
    padding: 20px;
    border-radius: 50%;
    background-color: var(--peg-slot);
  }

  .peg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
  }

  .cantoggle {
    cursor: pointer;
  }

  .red {
    background-color: var(--peg-red);
  }

  .orange {
    background-color: var(--peg-orange);
  }

  .yellow {
    background-color: var(--peg-yellow);
  }

  .green {
    background-color: var(--peg-green);
  }

  .blue {
    background-color: var(--peg-blue);
  }

  .purple {
    background-color: var(--peg-purple);
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
