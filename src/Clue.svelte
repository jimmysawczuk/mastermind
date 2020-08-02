<script>
  export let color
</script>

<style lang="scss">
  @use "_scss/variables" as *;

  div {
    display: block;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background: $peg-slot;
  }

  .filled {
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }

  .black {
    background: $peg-black;
    border: 1px solid $peg-black;
  }

  .white {
    background: $peg-white;
    border: 1px solid $peg-black;
  }
</style>

<div
  class:peg={true}
  class:filled={color == 'white' || color == 'black'}
  class={color} />
