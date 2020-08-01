<script>
  import { DEFAULT_COLORS } from "./utils"

  const toggleColors = ["", ...DEFAULT_COLORS]

  export let value = ""
  export let readonly = false

  function togglePeg() {
    if (readonly) {
      return
    }

    const selected = toggleColors.indexOf(value)
    value = toggleColors[(selected + 1) % toggleColors.length]
  }
</script>

<style>
  div {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
  }

  .cantoggle {
    cursor: pointer;
  }

  .red {
    background-color: #ff0000;
  }
  .orange {
    background-color: #ffa500;
  }
  .yellow {
    background-color: #ffff00;
  }
  .green {
    background-color: #008800;
  }
  .blue {
    background-color: #0000ff;
  }
  .purple {
    background-color: #4b0082;
  }
</style>

<div
  class:peg={true}
  class:cantoggle={!readonly}
  class:red={value == 'red'}
  class:orange={value == 'orange'}
  class:yellow={value == 'yellow'}
  class:green={value == 'green'}
  class:blue={value == 'blue'}
  class:purple={value == 'purple'}
  on:click={togglePeg} />
