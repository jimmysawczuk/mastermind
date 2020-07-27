<script>
  const colors = ["", "red", "orange", "yellow", "green", "blue", "purple"];
  let selected = 0;

  export let value = "";
  export let readonly = false;

  function togglePeg() {
    if (readonly) {
      return;
    }

    selected = (selected + 1) % colors.length;
    value = colors[selected];
  }
</script>

<style>
  div {
    display: inline-block;
    width: 30px;
    height: 30px;
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
  class={value}
  class:cantoggle={!readonly}
  on:click={togglePeg} />
