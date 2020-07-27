<script>
  const colors = ["", "red", "orange", "yellow", "green", "blue", "purple"]

  export let value = ""
  export let readonly = false

  function togglePeg() {
    if (readonly) {
      return
    }

    const selected = colors.indexOf(value)
    value = colors[(selected + 1) % colors.length]
  }
</script>

<style>
  div {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    padding: 5px;
    margin: 5px;
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

<div class="{value}" class:cantoggle="{!readonly}" on:click="{togglePeg}" />
